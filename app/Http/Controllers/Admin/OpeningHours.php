<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;

use App\Http\Controllers\Controller;

use Inertia\Inertia;

use App\Http\Requests\StoreOpeningHours;
use App\Http\Requests\UpdateOpeningHours;
use App\Models\Operation;

class OpeningHours extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $operations = Operation::all();

        return Inertia::render('admin/openingHours', [
            'operations' => $operations
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreOpeningHours $request)
    {
        Operation::create([
            'dayOpen' => $request->dayOpen,
            'dayClose' => $request->dayClose,
            'open' => $request->open,
            'close' => $request->close,
            'interval' => $request->interval
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateOpeningHours $request, Operation $operation)
    {
        $operation->dayOpen = $request->dayOpen ?? $operation->dayOpen;
        $operation->dayClose = $request->dayClose ?? $operation->dayClose;
        $operation->open = $request->open ?? $operation->open;
        $operation->close = $request->close ?? $operation->close;
        $operation->interval = $request->interval ?? $operation->interval;

        $operation->save();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
