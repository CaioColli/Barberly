<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ClosingDays extends Model
{
    protected $fillable = ['day', 'initialHour', 'finalHour'];
}
