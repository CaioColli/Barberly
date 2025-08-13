<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\AdminAddService;
use App\Http\Controllers\AdminDashboard;
use App\Http\Controllers\ServiceController;

Route::middleware(['auth', 'verified'])->group(function () {

    Route::prefix('admin')->middleware('barber')->group(function () {
        Route::get('dashboard', [AdminDashboard::class, 'index'])->name('adminDashboard');
    });

    Route::prefix('admin')->middleware('master')->group(function () {
        Route::get('addService', [AdminAddService::class, 'index'])->name('addService');
        Route::post('addService', [ServiceController::class, 'store'])->name('addService');

        Route::get('services', [ServiceController::class, 'index'])->name('services');

        Route::get('service/{service}', [ServiceController::class, 'show'])->name('service');
        Route::post('service/{service}', [ServiceController::class, 'update'])->name('serviceUpdate');
        Route::delete('service/{service}', [ServiceController::class, 'destroy'])->name('serviceDelete');
    });
});
