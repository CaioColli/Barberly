<?php

use App\Http\Controllers\AdminAddService;
use App\Http\Controllers\AdminDashboard;
use App\Http\Controllers\ServiceController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {

    Route::prefix('admin')->middleware('barber')->group(function () {
        Route::get('dashboard', [AdminDashboard::class, 'index'])->name('adminDashboard');
    });

    Route::prefix('admin')->middleware('master')->group(function () {
        Route::get('addService', [AdminAddService::class, 'index'])->name('addService');

        Route::post('addService', [ServiceController::class, 'store'])->name('addService');
    });

    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
