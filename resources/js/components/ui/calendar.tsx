import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import Badge from '@mui/material/Badge';
import { PickersDay, PickersDayProps } from '@mui/x-date-pickers/PickersDay';
import { ptBR } from 'date-fns/locale';
import { format } from "date-fns";
import { usePage } from '@inertiajs/react';

type CalendarProps = {
    atualDate?: Date | null
    essentialContent?: boolean
    onDateChange?: (date: string | null) => void
}

type CustomDayProps = PickersDayProps & {
    out?: Date[];
    few?: Date[];
};

const Calendar = ({ essentialContent = true, atualDate, onDateChange }: CalendarProps) => {
    const { closingDays } = usePage().props

    const rawOut = [
        { day: 2, month: 6, year: 2025 },
        { day: 3, month: 6, year: 2025 },
        { day: 4, month: 6, year: 2025 },
        { day: 5, month: 6, year: 2025 },
    ];

    const rawFew = [
        { day: 10, month: 7, year: 2025 },
        { day: 11, month: 7, year: 2025 },
        { day: 12, month: 7, year: 2025 },
    ];

    const rawClosed = [
        { weekday: 'Domingo' },
    ];

    const closed = rawClosed.map((({ weekday }) => weekday));

    const weekDayMap = {
        'Domingo': 0,
        'Segunda-feira': 1,
        'Terça-feira': 2,
        'Quarta-feira': 3,
        'Quinta-feira': 4,
        'Sexta-feira': 5,
        'Sábado': 6
    } as { [key: string]: number };

    const disabledDays = closed.map(day => weekDayMap[day]);

    const apparence = localStorage.getItem('appearance') as 'system' | 'light' | 'dark';

    // Converte para objetos Date mês -1 (sem isso janeiro começa com 0 e não 1) 
    const out = rawOut.map(({ year, month, day }) => new Date(year, month - 1, day));
    const few = rawFew.map(({ year, month, day }) => new Date(year, month - 1, day));

    function isSameDay(d1: Date, d2: Date) {
        return (
            d1.getDate() === d2.getDate() &&
            d1.getMonth() === d2.getMonth() &&
            d1.getFullYear() === d2.getFullYear()
        );
    }

    function ServerDay(props: CustomDayProps) {
        const { out = [], few = [], day, outsideCurrentMonth, ...other } = props;

        const isOut = !outsideCurrentMonth && out.some(date => isSameDay(date, day));
        const isFew = !outsideCurrentMonth && few.some(date => isSameDay(date, day));

        let badgeContent;
        if (isOut)
            badgeContent = (
                <span
                    style={{
                        width: 8,
                        height: 8,
                        borderRadius: '50%',
                        backgroundColor: '#ad0000',
                        display: 'inline-block',
                        position: 'absolute',
                        right: '8px',
                        top: '8px',
                    }}
                />
            );
        else if (isFew)
            badgeContent = (
                <span
                    style={{
                        width: 8,
                        height: 8,
                        borderRadius: '50%',
                        backgroundColor: '#dd5500',
                        display: 'inline-block',
                    }}
                />
            );

        return (
            <Badge key={day.toString()} overlap="circular" badgeContent={badgeContent}>
                <PickersDay
                    {...other}
                    outsideCurrentMonth={outsideCurrentMonth}
                    day={day}
                    sx={{
                        color: apparence === 'dark' ? '#969696' : '#161616',

                        '&.MuiPickersDay-today': {
                            border: 'none',
                        },

                        '&.Mui-selected': {
                            border: 'none',
                            background: '#161616',
                            color: '#f5f5f5'
                        },

                        '&.Mui-selected:focus': {
                            background: '#161616'
                        },

                    }}
                />
            </Badge>
        );
    }

    return (
        <div>
            <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ptBR}>
                <DateCalendar
                    views={['day']}

                    value={atualDate}
                    onChange={(date) => {
                        if (onDateChange) {
                            if (date) {
                                onDateChange(format(date, 'dd/MM/yyyy', { locale: ptBR }));
                            }
                        }
                    }}

                    slots={{
                        day: ServerDay,
                    }}

                    shouldDisableDate={(date) => {
                        return disabledDays.includes(date.getDay());
                    }}

                    // Estilização componentes internos / Marcações
                    slotProps={{
                        day: { out, few } as CustomDayProps,

                        calendarHeader: {
                            sx: {
                                display: 'flex',
                                justifyContent: 'space-between',
                                width: '100%',
                                margin: '0',
                                padding: '0',
                                color: apparence === 'dark' ? '#f5f5f5' : '#161616'
                            }
                        },
                        nextIconButton: {
                            sx: {
                                color: apparence === 'dark' ? '#f5f5f5' : '#161616',
                                padding: '0',
                                marginLeft: '8px'
                            }
                        },
                        previousIconButton: {
                            sx: {
                                color: apparence === 'dark' ? '#f5f5f5' : '#161616',
                                padding: '0'
                            }
                        },
                        switchViewButton: {
                            sx: {
                                color: apparence === 'dark' ? '#969696' : '#161616'
                            }
                        }
                    }}

                    // Estilização componentes externos
                    sx={{
                        '& .MuiDayCalendar-weekDayLabel': {
                            color: apparence === 'dark' ? '#969696' : '#161616',
                            fontWeight: 'bold',
                        },

                        '&.MuiDateCalendar-root': {
                            margin: '0',
                            width: 'fit-content',
                            maxHeight: 'fit-content',
                        },

                        '& .MuiDayCalendar-slideTransition': {
                            maxHeight: 'fit-content',
                        }
                    }}
                />
            </LocalizationProvider>

            {essentialContent && (
                <div className='flex gap-4'>
                    <div className='flex gap-2 items-center'>
                        <span className='block w-2 h-2 bg-[var(--custom-orange)] rounded-4xl'></span>
                        <span className='text-[14px]'>Poucos horários disponíveis</span>
                    </div>

                    <div className='flex gap-2 items-center'>
                        <span className='block w-2 h-2 bg-[var(--custom-red)] rounded-4xl'></span>
                        <span className='text-[14px]'>Sem horários disponíveis</span>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Calendar;