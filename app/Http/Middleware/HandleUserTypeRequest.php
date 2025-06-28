<?php

namespace App\Http\Middleware;

use App\Models\UserType;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Symfony\Component\HttpFoundation\Response;

class HandleUserTypeRequest
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

        if ($userType->user_type != 'admin') {
            return redirect()->route('dashboard');
        }
        
        return $next($request);
    }
}
