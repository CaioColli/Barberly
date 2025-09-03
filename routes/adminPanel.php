<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\AdminDashboard;
use App\Http\Controllers\Admin\CreateService;
use App\Http\Controllers\Admin\Service;
use App\Http\Controllers\Admin\OpeningHours;

Route::middleware(['auth', 'verified'])->group(function () {

    Route::prefix('admin')->middleware('barber')->group(function () {
        Route::get('dashboard', [AdminDashboard::class, 'index'])->name('adminDashboard');
    });

    Route::prefix('admin')->middleware('master')->group(function () {
        Route::get('addService', [CreateService::class, 'index'])->name('addService');
        Route::post('addService', [CreateService::class, 'store'])->name('addService');

        Route::get('services', [Service::class, 'index'])->name('services');
        Route::get('service/{service}', [Service::class, 'show'])->name('service');
        Route::post('service/{service}', [Service::class, 'update'])->name('serviceUpdate');
        Route::delete('service/{service}', [Service::class, 'destroy'])->name('serviceDelete');

        Route::prefix('openingHours')->group(function () {
            Route::get('', [OpeningHours::class, 'index'])->name('openingHours'); 
            Route::post('', [OpeningHours::class, 'store'])->name('openingHoursCreate'); 
            Route::post('/{operation}', [OpeningHours::class, 'update'])->name('openingHoursUpdate'); 
        });
    });
});
