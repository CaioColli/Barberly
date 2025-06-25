import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import Badge from '@mui/material/Badge';
import { PickersDay, PickersDayProps } from '@mui/x-date-pickers/PickersDay';
import { ptBR } from 'date-fns/locale';


const Calendar = () => {
    const rawOut = [
        { day: 1, month: 6, year: 2025 },
        { day: 2, month: 6, year: 2025 },
        { day: 3, month: 6, year: 2025 },
    ];

    const rawFew = [
        { day: 10, month: 7, year: 2025 },
        { day: 11, month: 7, year: 2025 },
        { day: 12, month: 7, year: 2025 },
    ];

    // Converte para objetos Date JS com mês zero-based
    const out = rawOut.map(({ year, month, day }) => new Date(year, month - 1, day));
    const few = rawFew.map(({ year, month, day }) => new Date(year, month - 1, day));


    function isSameDay(d1: Date, d2: Date) {
        return (
            d1.getDate() === d2.getDate() &&
            d1.getMonth() === d2.getMonth() &&
            d1.getFullYear() === d2.getFullYear()
        );
    }

    function ServerDay(props: PickersDayProps & { out?: Date[], few?: Date[] }) {
        const { out = [], few = [], day, outsideCurrentMonth, ...other } = props;

        const isOut = !outsideCurrentMonth && out.some(date => isSameDay(date, day));
        const isFew = !outsideCurrentMonth && few.some(date => isSameDay(date, day));

        let badgeContent;
        if (isOut)
            badgeContent = (
                <span
                    style={{
                        width: 6,
                        height: 6,
                        borderRadius: '50%',
                        backgroundColor: '#ad0000',
                        display: 'inline-block',
                    }}
                />
            );
        else if (isFew)
            badgeContent = (
                <span
                    style={{
                        width: 6,
                        height: 6,
                        borderRadius: '50%',
                        backgroundColor: '#dd5500',
                        display: 'inline-block',
                    }}
                />
            );

        return (
            <Badge key={day.toString()} overlap="circular" badgeContent={badgeContent}>
                <PickersDay {...other} outsideCurrentMonth={outsideCurrentMonth} day={day} />
            </Badge>
        );
    }



    return (
        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ptBR}>
            <DateCalendar
                slots={{
                    day: ServerDay,
                }}
                slotProps={{
                    day: {
                        out,
                        few
                    } as any,
                }}

                className='text-primary'
            />
        </LocalizationProvider>
    )
}


export default Calendar;