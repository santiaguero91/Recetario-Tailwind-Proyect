import { Link } from "react-router-dom";
import React from "react";


function Old() { 
    return <div>
        <h1>ESTO ES EL LANDING</h1>
        <Link to="/home">
          <button class=" bg-blue-500 hover:bg-green-700 text-white font-bold py-4 px-8  rounded" >TO HOME</button>
        </Link>

    <div class="mt-5">
    <h1 class=" mt-5  text-green-500 text-xl text-center">Esto es un H1</h1>
    <h2 class="text-right">Esto es un H2</h2>
    <h3 class=" text-red-800 ">Esto es un H3</h3>
    <h4 class="uppercase text-xl shadow-md">Esto es un H4</h4>
    <h5 class="">Esto es un H5</h5>
    <h6 class="text-white bg-blue-500">Esto es un H6</h6>
</div>

<hr></hr>
<div class="grid grid-cols-3 gap-4 my-2">
    <div class="bg-red-400">A</div>
    <div class="bg-red-500">B</div>
    <div class="bg-red-600">C</div>
    <div class="bg-red-900">D</div>
    <div class="bg-red-800">E</div>
    <div class="bg-red-200">F</div>
</div>

<div class="grid grid-cols-4 gap-4 my-2">
    <div class="bg-green-400">A</div>
    <div class="bg-green-500">B</div>
    <div class="bg-green-600">C</div>
    <div class="bg-green-900">D</div>
</div>

<div class="grid grid-flow-row-dense grid-cols-3 grid-rows-3 ...">
  <div class="col-span-2">01</div>
  <div class="col-span-2">02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
</div>







</div>
}
export default Old;