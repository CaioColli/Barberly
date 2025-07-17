<?php

namespace App\Http\Controllers;

use App\Models\Service;
use App\Http\Controllers\Controller;
use App\Http\Requests\ServiceFormRequest;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ServiceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $services = Service::all()->map(function ($service) {
            $service->path = asset('storage/' . $service->path);

            return $service;
        });

        return Inertia::render('admin/services')->with('services', $services);
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
    public function store(ServiceFormRequest $request)
    {
        $path = $request->file('file')->store('services/services_images', 'public');

        Service::create([
            'name' => $request->name,
            'price' => $request->price,
            'path' => $path,
        ]);

        return to_route('services');
    }


    /**
     * Display the specified resource.
     */
    public function show(Service $service)
    {
        $service = Service::find($service->id);
        $service->path = asset('storage/' . $service->path);

        return Inertia::render('admin/service')->with('service', $service);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Service $service)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Service $service)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Service $service)
    {
        $pathImage = $service->path;
        unlink(public_path('storage/' . $pathImage));

        $service->delete();

        return to_route('services');
    }
}
