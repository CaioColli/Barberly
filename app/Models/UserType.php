<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserType extends Model
{
    protected $table = 'users_type';

    protected $fillable = ['user_id', 'user_type'];
}
