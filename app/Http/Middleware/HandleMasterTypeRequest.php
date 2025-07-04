<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

use Illuminate\Support\Facades\Auth;
use App\Models\UserType;
use Inertia\Inertia;

class HandleMasterTypeRequest
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $user = Auth::user();

        $userType = UserType::where('user_id', $user->id)->first();

        if ($userType->user_type != 'master') {
            return redirect()->route('adminDashboard');
        }

        Inertia::share('userType', $userType);

        return $next($request);
    }
}
