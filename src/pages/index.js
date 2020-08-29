import React from 'react'
import { Typography } from 'antd'
import LandingLayout from '@layouts/LandingLayout'

export default () => (
  <LandingLayout>
    <div class="bg-black text-gray-300 min-h-screen p-10">
      <div class="flex">
        <img class="mr-6" src="https://www.brandyclarkmusic.com/sites/g/files/g2000005121/f/202002/IMG_9489_ret%20crop.png" height="225" width="225" />

        <div class="flex flex-col justify-center">

          <h4 class="mt-0 mb-2 uppercase text-gray-500 tracking-widest text-xs">
            Playlist
                </h4>
          <h1 class="mt-0 mb-2 text-white text-4xl">Brandy Clark Radio</h1>

          <p class="text-gray-600 mb-2 text-sm">
            With Roni L., Ollie
                </p>
          <p class="text-gray-600 text-sm">
            Created by <a>Spotify</a> - 5 Albums, 36 songs, 2 hr 42 min
                </p>
        </div>
      </div>
      <div class="mt-6 flex justify-between">
        <div class="flex">
          <button class="mr-2 bg-green-500 text-green-100 block py-2 px-8 rounded-full">
            Play
                </button>
          <button class="mr-2  block p-2 rounded-full">

            <img src="heart.png" height="25" width="25" />
          </button>
          <button class="mr-2 block p-2 rounded-full">
            ...
                </button>
        </div>

        <div class="text-gray-600 text-sm tracking-widest text-right">
          <h5 class="mb-1">Followers</h5>
          <p>5,055</p>
        </div>
      </div>
      <div class="mt-10">
        <div class="flex text-gray-600">
          <div class="p-2 w-8 flex-shrink-0"></div>
          <div class="p-2 w-8 flex-shrink-0"></div>
          <div class="p-2 w-full">Title</div>
          <div class="p-2 w-full">Artist</div>
          <div class="p-2 w-full">Album</div>
          <div class="p-2 w-12 flex-shrink-0 text-right">⏱</div>
        </div>
        <div class="flex  border border-gray-800 hover:bg-gray-800">
          <img class="mt-5 ml-5 mb-5" src="https://www.brandyclarkmusic.com/sites/g/files/g2000005121/f/styles/large/public/201603/BC-BigDaySmallTown-Cover.png?itok=EN9-uQU2" height="175" width="175" />
          <h1 class="mt-5 mb-2 ml-8 text-white text-4xl">Big Day in a Small Town</h1>
          <div class="flex flex-col justify-center ">
            <p class="mt-5 mb-2 ml-16 text-gray-600 mb-2 text-sm">
              11 Songs, 40 Minutes
                </p>
            <p class="mt-5 mb-2 ml-16 text-gray-600 text-sm">
              Release <a>June 10, 2016</a> 2026 Warner Records Inc
                </p>
            <p class="mt-3 mb-2 ml-16 pr-10 text-gray-600 text-sm">
              Clark applies her writerly touch to songs that are bold, relatable, and rich in detail. Big Day in a Small Town finds the GRAMMY®-nominated singer/songwriter following up her acclaimed solo debut—2012’s 12 Stories</p>
          </div>
        </div>
        <div class="flex border-b border-gray-800 hover:bg-gray-800">
          <div class="p-3 w-8 flex-shrink-0">▶️</div>
          <div class="p-3 w-8 flex-shrink-0"><button class="block ">❤️</button></div>
          <div class="p-3 w-full">Soap Opera</div>
          <div class="p-3 w-full">Brandy Clark</div>
          <div class="p-3 w-full">Big Day in a Small Town</div>
          <div class="p-3 w-12 flex-shrink-0 text-right">3:26</div>
        </div>
        <div class="flex border-b border-gray-800 hover:bg-gray-800">
          <div class="p-3 w-8 flex-shrink-0">▶️</div>
          <div class="p-3 w-8 flex-shrink-0"><button class="block ">❤️</button></div>
          <div class="p-3 w-full">Girl Next Door</div>
          <div class="p-3 w-full">Brandy Clark</div>
          <div class="p-3 w-full">Big Day in a Small Town</div>
          <div class="p-3 w-12 flex-shrink-0 text-right">4:34</div>
        </div>
        <div class="flex border-b border-gray-800 hover:bg-gray-800">
          <div class="p-3 w-8 flex-shrink-0">▶️</div>
          <div class="p-3 w-8 flex-shrink-0"><button class="block ">❤️</button></div>
          <div class="p-3 w-full">Homecoming Queen</div>
          <div class="p-3 w-full">Brandy Clark</div>
          <div class="p-3 w-full">Big Day in a Small Town</div>
          <div class="p-3 w-12 flex-shrink-0 text-right">3:07</div>
        </div>
        <div class="flex border-b border-gray-800 hover:bg-gray-800">
          <div class="p-3 w-8 flex-shrink-0">▶️</div>
          <div class="p-3 w-8 flex-shrink-0"><button class="block ">❤️</button></div>
          <div class="p-3 w-full">Broke</div>
          <div class="p-3 w-full">Brandy Clark</div>
          <div class="p-3 w-full">Big Day in a Small Town</div>
          <div class="p-3 w-12 flex-shrink-0 text-right">3:39</div>
        </div>
        <div class="flex border-b border-gray-800 hover:bg-gray-800">
          <div class="p-3 w-8 flex-shrink-0">▶️</div>
          <div class="p-3 w-8 flex-shrink-0"><button class="block ">❤️</button></div>
          <div class="p-3 w-full">You Can Come Over</div>
          <div class="p-3 w-full">Brandy Clark</div>
          <div class="p-3 w-full">Big Day in a Small Town</div>
          <div class="p-3 w-12 flex-shrink-0 text-right">3:53</div>
        </div>
        <div class="flex border-b border-gray-800 hover:bg-gray-800">
          <div class="p-3 w-8 flex-shrink-0">▶️</div>
          <div class="p-3 w-8 flex-shrink-0"><button class="block ">❤️</button></div>
          <div class="p-3 w-full">Big Day in a Small Town</div>
          <div class="p-3 w-full">Brandy Clark</div>
          <div class="p-3 w-full">Big Day in a Small Town</div>
          <div class="p-3 w-12 flex-shrink-0 text-right">3:43</div>
        </div>
        <div class="flex border-b border-gray-800 hover:bg-gray-800">
          <div class="p-3 w-8 flex-shrink-0">▶️</div>
          <div class="p-3 w-8 flex-shrink-0"><button class="block ">❤️</button></div>
          <div class="p-3 w-full">Three Kids No Husband</div>
          <div class="p-3 w-full">Brandy Clark</div>
          <div class="p-3 w-full">Big Day in a Small Town</div>
          <div class="p-3 w-12 flex-shrink-0 text-right">3:15</div>
        </div>
        <div class="flex border-b border-gray-800 hover:bg-gray-800">
          <div class="p-3 w-8 flex-shrink-0">▶️</div>
          <div class="p-3 w-8 flex-shrink-0"><button class="block ">❤️</button></div>
          <div class="p-3 w-full">Daughter</div>
          <div class="p-3 w-full">Brandy Clark</div>
          <div class="p-3 w-full">Big Day in a Small Town</div>
          <div class="p-3 w-12 flex-shrink-0 text-right">3:20</div>
        </div>
        <div class="flex border-b border-gray-800 hover:bg-gray-800">
          <div class="p-3 w-8 flex-shrink-0">▶️</div>
          <div class="p-3 w-8 flex-shrink-0"><button class="block ">❤️</button></div>
          <div class="p-3 w-full">Love Can Go To Hell</div>
          <div class="p-3 w-full">Brandy Clark</div>
          <div class="p-3 w-full">Big Day in a Small Town</div>
          <div class="p-3 w-12 flex-shrink-0 text-right">3:58</div>
        </div>
        <div class="flex border-b border-gray-800 hover:bg-gray-800">
          <div class="p-3 w-8 flex-shrink-0">▶️</div>
          <div class="p-3 w-8 flex-shrink-0"><button class="block ">❤️</button></div>
          <div class="p-3 w-full">Drinkin', Smokin', Cheatin'</div>
          <div class="p-3 w-full">Brandy Clark</div>
          <div class="p-3 w-full">Big Day in a Small Town</div>
          <div class="p-3 w-12 flex-shrink-0 text-right">3:53</div>
        </div>
        <div class="flex border-b border-gray-800 hover:bg-gray-800">
          <div class="p-3 w-8 flex-shrink-0">▶️</div>
          <div class="p-3 w-8 flex-shrink-0"><button class="block ">❤️</button></div>
          <div class="p-3 w-full">Since You've Gone to Heaven</div>
          <div class="p-3 w-full">Brandy Clark</div>
          <div class="p-3 w-full">Big Day in a Small Town</div>
          <div class="p-3 w-12 flex-shrink-0 text-right">4:33</div>
        </div>
        <div class="flex border-b border-gray-800 hover:bg-gray-800">
          <div class="p-3 w-8 flex-shrink-0">▶️</div>
          <div class="p-3 w-8 flex-shrink-0"><button class="block ">❤️</button></div>
          <div class="p-3 w-full">Girl Next Door</div>
          <div class="p-3 w-full">Brandy Clark</div>
          <div class="p-3 w-full">Girl Next Door - Single</div>
          <div class="p-3 w-12 flex-shrink-0 text-right">3:52</div>
        </div>
        <div class="flex border-b border-gray-800 hover:bg-gray-800">
          <div class="p-3 w-8 flex-shrink-0">▶️</div>
          <div class="p-3 w-8 flex-shrink-0"><button class="block ">❤️</button></div>
          <div class="p-3 w-full">Merry Christmans Darling</div>
          <div class="p-3 w-full">Brandy Clark</div>
          <div class="p-3 w-full">Merry Christmans Darling</div>
          <div class="p-3 w-12 flex-shrink-0 text-right">3:41</div>
        </div>
        <div class="flex  border border-gray-800 hover:bg-gray-800">
          <img class="mt-5 ml-5 mb-5" src="https://www.brandyclarkmusic.com/sites/g/files/g2000005121/f/styles/large/public/202001/3e5584df-2c64-4fbd-a3e6-8af05c674bd1.jpg?itok=Dlc40x9S" height="175" width="175" />
          <h1 class="mt-20 mb-2 ml-16 text-white text-4xl">Your Life is a Record</h1>
          <div class="flex flex-col justify-center ">
            <p class="mt-10 mb-2 ml-16 text-gray-600 mb-2 text-sm">
              11 Songs, 39 Minutes
                </p>
            <p class="mt-5 mb-2 ml-16 text-gray-600 text-sm">
              Release <a>March 6, 2020</a> 2020 Warner Records Inc
                </p>
            <p class="mt-5 mb-2 ml-16 text-gray-600 text-sm">
              “When I feel like I have a lot of heavy on my records, you need the humor to balance that out,” Brandy Clark tells Apple Music.</p>
          </div>
        </div>
        <div class="flex border-b border-gray-800 hover:bg-gray-800">
          <div class="p-3 w-8 flex-shrink-0">▶️</div>
          <div class="p-3 w-8 flex-shrink-0"><button class="block ">❤️</button></div>
          <div class="p-3 w-full">I'll Be the Sad Song</div>
          <div class="p-3 w-full">Brandy Clark</div>
          <div class="p-3 w-full">Your Life is a Record</div>
          <div class="p-3 w-12 flex-shrink-0 text-right">3:58</div>
        </div>
        <div class="flex border-b border-gray-800 hover:bg-gray-800">
          <div class="p-3 w-8 flex-shrink-0">▶️</div>
          <div class="p-3 w-8 flex-shrink-0"><button class="block ">❤️</button></div>
          <div class="p-3 w-full">Long Walk</div>
          <div class="p-3 w-full">Brandy Clark</div>
          <div class="p-3 w-full">Your Life is a Record</div>
          <div class="p-3 w-12 flex-shrink-0 text-right">2:40</div>
        </div>
        <div class="flex border-b border-gray-800 hover:bg-gray-800">
          <div class="p-3 w-8 flex-shrink-0">▶️</div>
          <div class="p-3 w-8 flex-shrink-0"><button class="block ">❤️</button></div>
          <div class="p-3 w-full">Love is a Fire</div>
          <div class="p-3 w-full">Brandy Clark</div>
          <div class="p-3 w-full">Your Life is a Record</div>
          <div class="p-3 w-12 flex-shrink-0 text-right">4:02</div>
        </div>
        <div class="flex border-b border-gray-800 hover:bg-gray-800">
          <div class="p-3 w-8 flex-shrink-0">▶️</div>
          <div class="p-3 w-8 flex-shrink-0"><button class="block ">❤️</button></div>
          <div class="p-3 w-full">Pawn Shop</div>
          <div class="p-3 w-full">Brandy Clark</div>
          <div class="p-3 w-full">Your Life is a Record</div>
          <div class="p-3 w-12 flex-shrink-0 text-right">3:51</div>
        </div>
        <div class="flex border-b border-gray-800 hover:bg-gray-800">
          <div class="p-3 w-8 flex-shrink-0">▶️</div>
          <div class="p-3 w-8 flex-shrink-0"><button class="block ">❤️</button></div>
          <div class="p-3 w-full">Who You Thought I Was</div>
          <div class="p-3 w-full">Brandy Clark</div>
          <div class="p-3 w-full">Your Life is a Record</div>
          <div class="p-3 w-12 flex-shrink-0 text-right">3:09</div>
        </div>
        <div class="flex border-b border-gray-800 hover:bg-gray-800">
          <div class="p-3 w-8 flex-shrink-0">▶️</div>
          <div class="p-3 w-8 flex-shrink-0"><button class="block ">❤️</button></div>
          <div class="p-3 w-full">Apologies</div>
          <div class="p-3 w-full">Brandy Clark</div>
          <div class="p-3 w-full">Your Life is a Record</div>
          <div class="p-3 w-12 flex-shrink-0 text-right">3:23</div>
        </div>
        <div class="flex border-b border-gray-800 hover:bg-gray-800">
          <div class="p-3 w-8 flex-shrink-0">▶️</div>
          <div class="p-3 w-8 flex-shrink-0"><button class="block ">❤️</button></div>
          <div class="p-3 w-full">Bigger Boat</div>
          <div class="p-3 w-full">Brandy Clark</div>
          <div class="p-3 w-full">Your Life is a Record</div>
          <div class="p-3 w-12 flex-shrink-0 text-right">3:34</div>
        </div>
        <div class="flex border-b border-gray-800 hover:bg-gray-800">
          <div class="p-3 w-8 flex-shrink-0">▶️</div>
          <div class="p-3 w-8 flex-shrink-0"><button class="block ">❤️</button></div>
          <div class="p-3 w-full">Bad Car</div>
          <div class="p-3 w-full">Brandy Clark</div>
          <div class="p-3 w-full">Your Life is a Record</div>
          <div class="p-3 w-12 flex-shrink-0 text-right">3:03</div>
        </div>
        <div class="flex border-b border-gray-800 hover:bg-gray-800">
          <div class="p-3 w-8 flex-shrink-0">▶️</div>
          <div class="p-3 w-8 flex-shrink-0"><button class="block ">❤️</button></div>
          <div class="p-3 w-full">Who Broke Whose Heart</div>
          <div class="p-3 w-full">Brandy Clark</div>
          <div class="p-3 w-full">Your Life is a Record</div>
          <div class="p-3 w-12 flex-shrink-0 text-right">4:33</div>
        </div>
        <div class="flex border-b border-gray-800 hover:bg-gray-800">
          <div class="p-3 w-8 flex-shrink-0">▶️</div>
          <div class="p-3 w-8 flex-shrink-0"><button class="block ">❤️</button></div>
          <div class="p-3 w-full">Can We Be Strangers</div>
          <div class="p-3 w-full">Brandy Clark</div>
          <div class="p-3 w-full">Your Life is a Record</div>
          <div class="p-3 w-12 flex-shrink-0 text-right">3:29</div>
        </div>
        <div class="flex border-b border-gray-800 hover:bg-gray-800">
          <div class="p-3 w-8 flex-shrink-0">▶️</div>
          <div class="p-3 w-8 flex-shrink-0"><button class="block ">❤️</button></div>
          <div class="p-3 w-full">The Past is The Past</div>
          <div class="p-3 w-full">Brandy Clark</div>
          <div class="p-3 w-full">Your Life is a Record</div>
          <div class="p-3 w-12 flex-shrink-0 text-right">5:00</div>
        </div>
        <div class="flex  border border-gray-800 hover:bg-gray-800">
          <img class="mt-5 ml-5 mb-5" src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fassets.rollingstone.com%2Fassets%2Fimages%2Falbum_review%2Fbrandy-clark-final-itunes-cover-20130823-101736-1381255829.jpg&f=1&nofb=1" height="175" width="175" />
          <h1 class="mt-20 mb-2 ml-16 text-white text-4xl">12 Stories</h1>
          <div class="flex flex-col justify-center ">
            <p class="mt-10 mb-2 ml-16 text-gray-600 mb-2 text-sm">
              12 Songs, 24 Minutes
                </p>
            <p class="mt-5 mb-2 ml-16 text-gray-600 text-sm">
              Release <a>November 5, 2014</a> 2014 Warner Records Inc
                </p>
            <p class="mt-5 mb-2 ml-16 text-gray-600 text-sm">
              Her debut is all airtight craftsmanship, sly wit and precise detailing that treats mainstream style like artisanal fast food.</p>
          </div>
        </div>
        <div class="flex border-b border-gray-800 hover:bg-gray-800">
          <div class="p-3 w-8 flex-shrink-0">▶️</div>
          <div class="p-3 w-8 flex-shrink-0"><button class="block ">❤️</button></div>
          <div class="p-3 w-full">Pray To Jesus</div>
          <div class="p-3 w-full">Brandy Clark</div>
          <div class="p-3 w-full">12 Stories</div>
          <div class="p-3 w-12 flex-shrink-0 text-right">3:22</div>
        </div>
        <div class="flex border-b border-gray-800 hover:bg-gray-800">
          <div class="p-3 w-8 flex-shrink-0">▶️</div>
          <div class="p-3 w-8 flex-shrink-0"><button class="block ">❤️</button></div>
          <div class="p-3 w-full">Crazy Women</div>
          <div class="p-3 w-full">12 Stories</div>
          <div class="p-3 w-full">Your Life is a Record</div>
          <div class="p-3 w-12 flex-shrink-0 text-right">3:37</div>
        </div>
        <div class="flex border-b border-gray-800 hover:bg-gray-800">
          <div class="p-3 w-8 flex-shrink-0">▶️</div>
          <div class="p-3 w-8 flex-shrink-0"><button class="block ">❤️</button></div>
          <div class="p-3 w-full">What'll Keep Me Out of Heavan</div>
          <div class="p-3 w-full">Brandy Clark</div>
          <div class="p-3 w-full">12 Stories</div>
          <div class="p-3 w-12 flex-shrink-0 text-right">3:35</div>
        </div>
        <div class="flex border-b border-gray-800 hover:bg-gray-800">
          <div class="p-3 w-8 flex-shrink-0">▶️</div>
          <div class="p-3 w-8 flex-shrink-0"><button class="block ">❤️</button></div>
          <div class="p-3 w-full">Get High</div>
          <div class="p-3 w-full">Brandy Clark</div>
          <div class="p-3 w-full">12 Stories</div>
          <div class="p-3 w-12 flex-shrink-0 text-right">3:32</div>
        </div>
        <div class="flex border-b border-gray-800 hover:bg-gray-800">
          <div class="p-3 w-8 flex-shrink-0">▶️</div>
          <div class="p-3 w-8 flex-shrink-0"><button class="block ">❤️</button></div>
          <div class="p-3 w-full">Hold My Hand</div>
          <div class="p-3 w-full">Brandy Clark</div>
          <div class="p-3 w-full">12 Stories</div>
          <div class="p-3 w-12 flex-shrink-0 text-right">3:37</div>
        </div>
        <div class="flex border-b border-gray-800 hover:bg-gray-800">
          <div class="p-3 w-8 flex-shrink-0">▶️</div>
          <div class="p-3 w-8 flex-shrink-0"><button class="block ">❤️</button></div>
          <div class="p-3 w-full">Stripes</div>
          <div class="p-3 w-full">Brandy Clark</div>
          <div class="p-3 w-full">12 Stories</div>
          <div class="p-3 w-12 flex-shrink-0 text-right">3:16</div>
        </div>
        <div class="flex border-b border-gray-800 hover:bg-gray-800">
          <div class="p-3 w-8 flex-shrink-0">▶️</div>
          <div class="p-3 w-8 flex-shrink-0"><button class="block ">❤️</button></div>
          <div class="p-3 w-full">In Some Corner</div>
          <div class="p-3 w-full">Brandy Clark</div>
          <div class="p-3 w-full">12 Stories</div>
          <div class="p-3 w-12 flex-shrink-0 text-right">3:39</div>
        </div>
        <div class="flex border-b border-gray-800 hover:bg-gray-800">
          <div class="p-3 w-8 flex-shrink-0">▶️</div>
          <div class="p-3 w-8 flex-shrink-0"><button class="block ">❤️</button></div>
          <div class="p-3 w-full">Take a Little Pill</div>
          <div class="p-3 w-full">Brandy Clark</div>
          <div class="p-3 w-full">12 Stories</div>
          <div class="p-3 w-12 flex-shrink-0 text-right">3:34</div>
        </div>
        <div class="flex border-b border-gray-800 hover:bg-gray-800">
          <div class="p-3 w-8 flex-shrink-0">▶️</div>
          <div class="p-3 w-8 flex-shrink-0"><button class="block ">❤️</button></div>
          <div class="p-3 w-full">Hungover</div>
          <div class="p-3 w-full">Brandy Clark</div>
          <div class="p-3 w-full">12 Stories</div>
          <div class="p-3 w-12 flex-shrink-0 text-right">3:56</div>
        </div>
        <div class="flex border-b border-gray-800 hover:bg-gray-800">
          <div class="p-3 w-8 flex-shrink-0">▶️</div>
          <div class="p-3 w-8 flex-shrink-0"><button class="block ">❤️</button></div>
          <div class="p-3 w-full">Illegitimate Children</div>
          <div class="p-3 w-full">Brandy Clark</div>
          <div class="p-3 w-full">12 Stories</div>
          <div class="p-3 w-12 flex-shrink-0 text-right">3:22</div>
        </div>
        <div class="flex border-b border-gray-800 hover:bg-gray-800">
          <div class="p-3 w-8 flex-shrink-0">▶️</div>
          <div class="p-3 w-8 flex-shrink-0"><button class="block ">❤️</button></div>
          <div class="p-3 w-full">The Day She Got Divorced</div>
          <div class="p-3 w-full">Brandy Clark</div>
          <div class="p-3 w-full">12 Stories</div>
          <div class="p-3 w-12 flex-shrink-0 text-right">3:24</div>
        </div>
        <div class="flex border-b border-gray-800 hover:bg-gray-800">
          <div class="p-3 w-8 flex-shrink-0">▶️</div>
          <div class="p-3 w-8 flex-shrink-0"><button class="block ">❤️</button></div>
          <div class="p-3 w-full">Just Like Him</div>
          <div class="p-3 w-full">Brandy Clark</div>
          <div class="p-3 w-full">12 Stories</div>
          <div class="p-3 w-12 flex-shrink-0 text-right">3:31</div>
        </div>

      </div>
    </div>
  </LandingLayout >
)
