<?php

namespace App\Http\Middleware;

use App\Models\UserType;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Symfony\Component\HttpFoundation\Response;

class HandleAdminTypeRequest
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

        if ($userType->user_type != 'barber' && $userType->user_type != 'master') {
            return redirect()->route('dashboard');
        }

        Inertia::share('userType', $userType);

        return $next($request);
    }
}
