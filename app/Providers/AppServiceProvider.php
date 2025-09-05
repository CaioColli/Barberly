<?php

namespace App\Providers;

use DateTime;

use App\Models\ClosingDays;
use App\Models\Operation;
use DateInterval;
use Illuminate\Support\ServiceProvider;

use Inertia\Inertia;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Inertia::share([
            'closingDays' => function () {
                return ClosingDays::all();
            },
            'operationHours' => function () {
                $operation = Operation::first();

                $open = $operation->open;
                $close = $operation->close;
                $interval = $operation->interval;

                $times = [];

                $start = new DateTime($open);
                $end = new DateTime($close);

                while ($start < $end) {
                    $times[] = $start->format('H:i');
                    $start->add(new DateInterval("PT{$interval}M"));
                }

                return $times;
            }
        ]);
    }
}
