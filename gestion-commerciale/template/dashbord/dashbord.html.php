<div class="flex flex-between">
  <div class="ml-12 mt-12 text-5xl text-[#088738] font-bold">
    Tableau de bord
  </div>
  <div class="mt-12 h-[50px] w-[50px] bg-[#E84630] flex items-center justity-center ml-[900px] rounded-xl" >
    <i class="fa-solid fa-bell text-3xl text-[#fff86] text-[#fff] m-auto"></i>
  </div>
</div>
<div class="grid grid-cols-5 ml-19 mt-12  gap-40">
  <div class=" bg-[#088738] h-[130px] w-[300px] rounded-2xl flex flex-col">
    <div class="mt-4 ml-4  text-xl text-[#fff]">Total clients</div>
    <div class="mt-3 ml-4  font-bold text-4xl text-[#fff]">125</div>
  </div>
  <div class=" bg-[#088738] h-[130px] w-[300px] rounded-2xl flex flex-col">
    <div class="mt-4 ml-4  text-xl text-[#fff]">Total Produits</div>
    <div class="mt-3 ml-4  font-bold text-4xl text-[#fff]">350</div>
  </div>
  <div class=" bg-[#088738] h-[130px] w-[300px] rounded-2xl flex flex-col">
    <div class="mt-4 ml-4  text-xl text-[#fff]">Commande en cours</div>
    <div class="mt-3 ml-4  font-bold text-4xl text-[#fff]">15</div>
  </div>
  <div class=" bg-[#088738] h-[130px] w-[300px] rounded-2xl flex flex-col pb-10">
    <div class="mt-2 ml-4  text-xl text-[#fff]">chiffre d'affaire (mois en <br> cours)</div>
    <div class="mt-2 ml-4  font-bold text-4xl text-[#fff]">125</div>
  </div>
  
</div>
<div class="flex flex-row m-auto mt-3 ml-70">
  <button class="h-[60px] w-[300px] bg-[#E84630] rounded-xl text-xl text-[#fff]  mt-5">Ajouter commmande</button>
<button class="h-[60px] w-[300px] bg-[#E84630] rounded-xl text-xl text-[#fff] ml-2 mt-5">Lister commande</button>
<button class="h-[60px] w-[300px] bg-[#E84630] rounded-xl text-xl text-[#fff] ml-2 mt-5">Enregistrer paiement</button>
</div>
<div class="w-[200px] px-3 lg:w-5/12 lg:flex-none">

</div>

<div class="ml-6  w-[1400px]   flex flex-wrap mt-10 -mx-3">
<div class="w-full  px-3 mt-0 lg:w-7/12 lg:flex-none">
  <div class="border-black/12.5 dark:bg-slate-850 dark:shadow-dark-xl shadow-xl relative z-20 flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
    <div class="border-black/12.5 mb-0 rounded-t-2xl border-b-0 border-solid p-6 pt-4 pb-0">
      <h6 class="capitalize dark:text-white">Sales overview</h6>
      <p class="mb-0 text-sm leading-normal dark:text-white dark:opacity-60">
        <i class="fa fa-arrow-up text-emerald-500"></i>
        <span class="font-semibold">4% more</span> in 2021
      </p>
    </div>
    <div class="flex-auto p-4">
      <div>
        <canvas id="chart-line" height="300"></canvas>
      </div>
    </div>
  </div>
</div>

<div class="w-full  px-3 lg:w-5/12 lg:flex-none">
  <div slider class="relative w-full h-full overflow-hidden rounded-2xl">
    <div slide class="absolute w-full h-full transition-all duration-500">
      <img class="object-cover h-full" src="./assets/img/carousel-1.jpg" alt="carousel image" />
      <div class="block text-start ml-12 left-0 bottom-0 absolute right-[15%] pt-5 pb-5 text-white">
        <div class="inline-block w-8 h-8 mb-4 text-center text-black bg-white bg-center rounded-lg fill-current stroke-none">
          <i class="top-0.75 text-xxs relative text-slate-700 ni ni-camera-compact"></i>
        </div>
        <h5 class="mb-1 text-white">Get started with Argon</h5>
        <p class="dark:opacity-80">There’s nothing I really wanted to do in life that I wasn’t able to get good at.</p>
      </div>
    </div>

    <div slide class="absolute w-full h-full transition-all duration-500">
      <img class="object-cover h-full" src="./assets/img/carousel-2.jpg" alt="carousel image" />
      <div class="block text-start ml-12 left-0 bottom-0 absolute right-[15%] pt-5 pb-5 text-white">
        <div class="inline-block w-8 h-8 mb-4 text-center text-black bg-white bg-center rounded-lg fill-current stroke-none">
          <i class="top-0.75 text-xxs relative text-slate-700 ni ni-bulb-61"></i>
        </div>
        <h5 class="mb-1 text-white">Faster way to create web pages</h5>
        <p class="dark:opacity-80">That’s my skill. I’m not really specifically talented at anything except for the ability to learn.</p>
      </div>
    </div>

    <div slide class=" w-full h-full transition-all duration-500">
      <img class="object-cover h-full" src="./assets/img/carousel-3.jpg" alt="carousel image" />
      <div class="block text-start ml-12 left-0 bottom-0 absolute right-[15%] pt-5 pb-5 text-white">
        <div class="inline-block w-8 h-8 mb-4 text-center text-black bg-white bg-center rounded-lg fill-current stroke-none">
          <i class="top-0.75 text-xxs relative text-slate-700 ni ni-trophy"></i>
        </div>
        <h5 class="mb-1 text-white">Share with us your design tips!</h5>
        <p class="dark:opacity-80">Don’t be afraid to be wrong because you can’t learn anything from a compliment.</p>
      </div>
    </div>

    <button btn-next class="absolute z-10 w-10 h-10 p-2 text-lg text-white border-none opacity-50 cursor-pointer hover:opacity-100 far fa-chevron-right active:scale-110 top-6 right-4"></button>
    <button btn-prev class="absolute z-10 w-10 h-10 p-2 text-lg text-white border-none opacity-50 cursor-pointer hover:opacity-100 far fa-chevron-left active:scale-110 top-6 right-16"></button>
  </div>
</div>
</div>
