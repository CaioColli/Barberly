<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('operation', function (Blueprint $table) {
            $table->id();
            $table->string('dayOpen');
            $table->string('dayClose');
            $table->time('open');
            $table->time('close');
            $table->integer('interval');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('operation');
    }
};
