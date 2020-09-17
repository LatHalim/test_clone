const grid = document.getElementById('grid');

const setting = {
    width: 5,
    height: 6,
};

const cards = [{
        name: "apu",
        element: `<div class="apu">
<div class="head">
    <div class="hair hair1"></div>
    <div class="hair hair2"></div>
    <div class="body head-main1"></div>
    <div class="circle body ear">
        <div class="no-border circle inner1"></div>
        <div class="no-border circle inner2"></div>
    </div>
    
    <div class="no-border body neck1"></div>
    
    <div class="hair sideburn">
<div class="no-border hair clip"></div>
</div>
    
    <div class="circle body eyebrow"></div>
    <div class="circle body eyebag1"></div>
    
    <div class="circle left-eye eye">
        <div class="no-border circle pupil"></div>
<div class="no-border body eyelid-top"></div>
<div class="no-border body eyelid-bottom"></div>
    </div>
    
    <div class="circle right-eye eye">
        <div class="no-border circle pupil"></div>
<div class="no-border body eyelid-top"></div>
<div class="no-border body eyelid-bottom"></div>
    </div>
    
    <div class="circle body mouth2"></div>
    
    <div class="body tooth tooth1"></div>
    <div class="body tooth tooth2"></div>
    <div class="body tooth tooth3"></div>
    <div class="body tooth tooth4"></div>
    
    <div class="circle body mouth1"></div>
<div class="no-border circle eyebag2"></div>
    <div class="no-border circle body mouth3"></div>
    <div class="no-border body neck2"></div>
    <div class="body nose-tip"></div>
    <div class="no-border body nose"></div>
    <div class="no-border moustache moustache-left"></div>
    <div class="no-border moustache moustache-right"></div>
</div>
</div>`
    },
    {
        name: "bart",
        element: `<div class="bart">
    <div class="head">
        <div class="no-border body hair hair1"></div>
        <div class="no-border body hair hair2"></div>
        <div class="no-border body hair hair3"></div>
        <div class="no-border body hair hair4"></div>
        <div class="no-border body hair hair5"></div>
        <div class="no-border body hair hair6"></div>
        <div class="no-border body hair hair7"></div>
        <div class="no-border body hair hair8"></div>
        <div class="no-border body hair hair9"></div>
        <div class="body mouth-lip2"></div>
        <div class="no-border body head-left1"></div>
        <div class="no-border body head-left2"></div>
        <div class="no-border body head-left3"></div>
        <div class="no-border body head-left4"></div>
        <div class="no-border body head-left5"></div>
        <div class="no-border body head-left6"></div>
        <div class="no-border body head-left7"></div>
        <div class="body eyelid"></div>
        <div class="no-border body mouth"></div>
        <div class="body mouth-lip"></div>
        <div class="no-border body head-right2"></div>
        <div class="no-border body head-right1"></div>
        <div class="no-border body head-right3"></div>
        
        
        <div class="body ear">
            <div class="no-border inner1"></div>
            <div class="no-border inner2"></div>
            <div class="no-border body clip"></div>
        </div>
        
        
        <div class="right-eye">
            <div class="no-border right-eye-pupil"></div>
    <div class="no-border body eyelid-top"></div>
    <div class="no-border body eyelid-bottom"></div>
        </div>
        
        
        <div class="no-border body nose"></div>
        <div class="body nose-tip"></div>
        
        
        <div class="left-eye">
            <div class="no-border left-eye-pupil"></div>
    <div class="no-border body eyelid-top"></div>
    <div class="no-border body eyelid-bottom"></div>
        </div>
    
        <div class="no-border mouth-smile"></div>
    </div>
   </div>`
    },
    {
        name: "homer",
        element: `<div class="homer">
<div class="head">
    
    
    <div class="hair1"></div>
    <div class="hair2"></div>
    <div class="body head-top"></div>
    <div class="no-border body head-main"></div>
    
    
    <div class="no-border m1"></div>
    <div class="no-border m2"></div>
    <div class="no-border m3"></div>
    <div class="no-border m4"></div>
    
   
    <div class="no-border neck1"></div>
    <div class="body neck2"></div>
    
    
    <div class="body ear">
        <div class="no-border inner1"></div>
        <div class="no-border inner2"></div>
        <div class="no-border body clip"></div>
    </div>
    
    
    <div class="mouth">
        <div class="mouth5"></div>
        <div class="mouth2"></div>
        <div class="mouth1"></div>
        <div class="mouth7"></div>
        <div class="no-border mouth3"></div>
        <div class="no-border mouth4"></div>
        <div class="no-border mouth6"></div>
        <div class="no-border mouth8"></div>
    </div>
    
    
    <div class="right-eye">
        <div class="no-border right-eye-pupil"></div>
<div class="no-border body eyelid-top"></div>
<div class="no-border body eyelid-bottom"></div>
    </div>
    
    
    <div class="body nose"></div>
    <div class="body nose-tip"></div>
    
    
    <div class="left-eye">
        <div class="no-border left-eye-pupil"></div>
<div class="no-border body eyelid-top"></div>
<div class="no-border body eyelid-bottom"></div>
    </div>
</div>
</div>`
    },
    {
        name: "itchy",
        element: `<div class="itchy">
<div class="head">
    <div class="body ear ear-right"></div>
    <div class="body ear ear-left"></div>
    
    <div class="no-border body body-main"></div>
    <div class="no-border body body-main3"></div>
    <div class="body body-main2"></div>
    <div class="no-border body mouth11"></div>
    <div class="no-border mouth-inner"></div>
    
    <div class="body hair hair1"></div>
    <div class="body hair hair2"></div>
    <div class="body hair hair3"></div>
    <div class="body hair hair4"></div>
    <div class="body hair hair5"></div>
    <div class="body hair hair6"></div>
    <div class="body hair hair7"></div>
    
    <div class="tooth tooth1"></div>
    <div class="tooth tooth2"></div>
    
    <div class="mouth8"></div>
    <div class="body mouth1"></div>
    <div class="body mouth2"></div>
    <div class="body mouth3"></div>
    <div class="mouth4"></div>
    <div class="mouth5"></div>
    <div class="no-border body mouth6"></div>
    <div class="mouth7"></div>
    <div class="body mouth9"></div>
    <div class="mouth10"></div>
    
    <div class="left-eye eye">
    <div class="no-border pupil"></div>
    </div>
    
    <div class="right-eye eye">
    <div class="no-border pupil"></div>
    </div>
    <div class="nose"></div>
    
    <div class="spike1"></div>
    <div class="spike2"></div>
</div>
</div>`
    },
    {
        name: "lisa",
        element: `<div class="lisa">
<div class="head">

<div class="no-border body head-main"></div>
    <div class="no-border body head-main2"></div>
    <div class="no-border body head-main3"></div>

<div class="no-border hair9"></div>
<div class="no-border hair10"></div>

<div class="body hair hair1"></div>
<div class="body hair hair2"></div>
<div class="body hair hair3"></div>
<div class="body hair hair4"></div>
<div class="body hair hair5"></div>
<div class="body hair hair6"></div>
<div class="body hair hair7"></div>
<div class="body hair hair8"></div>
    
    <div class="body mouth-lip2"></div>
    <div class="body mouth-lip"></div>
    <div class="no-border body neck"></div>
    <div class="no-border body mouth"></div>
    <div class="no-border body neck2"></div>
    <div class="no-border body neck3"></div>
    <div class="no-border mouth-smile"></div>

    
    <div class="body ear">
        <div class="no-border inner1"></div>
        <div class="no-border inner2"></div>
        <div class="no-border body clip"></div>
    </div>

    <div class="no-border eyelash1 eyelash"></div>
    <div class="no-border eyelash2 eyelash"></div>
    <div class="no-border eyelash3 eyelash"></div>
    <div class="no-border eyelash4 eyelash"></div>
    <div class="no-border eyelash5 eyelash"></div>
    <div class="no-border eyelash6 eyelash"></div>
    <div class="no-border eyelash7 eyelash"></div>
    <div class="no-border eyelash8 eyelash"></div>
    
   
    <div class="right-eye">
        <div class="no-border right-eye-pupil"></div>
<div class="no-border body eyelid-top"></div>
<div class="no-border body eyelid-bottom"></div>
    </div>
    
    
    <div class="no-border body nose"></div>
    <div class="body nose-tip"></div>
    
   
    <div class="left-eye">
        <div class="no-border left-eye-pupil"></div>
<div class="no-border body eyelid-top"></div>
<div class="no-border body eyelid-bottom"></div>
    </div>

<div class="necklace necklace1"></div>
<div class="necklace necklace2"></div>
<div class="necklace necklace3"></div>
<div class="necklace necklace5"></div>
<div class="necklace necklace4"></div>
</div>
</div>`
    },
    {
        name: "maggie",
        element: `<div class="maggie">
<div class="head">

<div class="no-border body head-main"></div>

<div class="body hair hair2"></div>
<div class="body hair hair1"></div>
<div class="body hair hair3"></div>
<div class="body hair hair4"></div>
<div class="body hair hair5"></div>
<div class="body hair hair6"></div>
<div class="body hair hair7"></div>
<div class="body hair hair8"></div>

<div class="bow bow1"></div>
<div class="circle bow bow2"></div>
<div class="bow bow3"></div>

<div class="no-border body neck"></div>

    
    <div class="circle body ear">
        <div class="no-border circle inner1"></div>
        <div class="no-border circle inner2"></div>
        <div class="no-border body clip"></div>
    </div>

<div class="circle body cheek"></div>

    <div class="no-border eyelash1 eyelash"></div>
    <div class="no-border eyelash2 eyelash"></div>
    <div class="no-border eyelash3 eyelash"></div>
    <div class="no-border eyelash4 eyelash"></div>
    <div class="no-border eyelash5 eyelash"></div>
    <div class="no-border eyelash6 eyelash"></div>
    <div class="no-border eyelash7 eyelash"></div>
    <div class="no-border eyelash8 eyelash"></div>
    
 
    <div class="circle eye right-eye">
        <div class="no-border circle pupil"></div>
<div class="no-border body eyelid-top"></div>
<div class="no-border body eyelid-bottom"></div>
    </div>
    
  
    <div class="body nose-tip"></div>
    
    <div class="circle eye left-eye">
        <div class="no-border circle pupil"></div>
<div class="no-border body eyelid-top"></div>
<div class="no-border body eyelid-bottom"></div>
    </div>

<div class="circle body mouth"></div>

<div class="circle dummy dummy1"></div>
<div class="dummy dummy2">
<div class="dummy dummy3"></div>
</div>
</div>
</div>`
    },
    {
        name: "mr-burns",
        element: `<div class="mr-burns">
    <div class="head">
    <div class="hair">
    <div class="hair-line hair-line1"></div>
    <div class="hair-line hair-line2"></div>
    <div class="hair-line hair-line3"></div>
    <div class="hair-line hair-line4"></div>
    </div>
    
    <div class="ear">
    <div class="inner1"></div>
        <div class="inner2"></div>
    </div>
    
    <div class="no-border head-main2"></div>
    
    <div class="eye-bulge"></div>
    <div class="eye left-eye">
    <div class="no-border pupil"></div>
    <div class="no-border body eyelid-top"></div>
    <div class="no-border body eyelid-bottom"></div>
    </div>
    
    <div class="eye right-eye">
    <div class="no-border pupil"></div>
    <div class="no-border body eyelid-top"></div>
    <div class="no-border body eyelid-bottom"></div>
    </div>
    
    <div class="sideburn"></div>
    <div class="head-main"></div>
    <div class="no-border head-main3"></div>
    
    <div class="liverspot1 liverspot"></div>
    <div class="liverspot2 liverspot"></div>
    <div class="liverspot3 liverspot"></div>    

    <div class="nose-bottom"></div>
    <div class="nose-top1"></div>
    <div class="nose-top2"></div>
    <div class="nose-tip"></div>
    <div class="no-border nose-inner"></div>
    
    <div class="eyebrow eyebrow1"></div>
    <div class="eyebrow eyebrow2"></div>
    <div class="eyebrow eyebrow3"></div>
    
    <div class="neck2"></div>
    <div class="neck1"></div>
    <div class="neck3"></div>
    <div class="neck4"></div>
    <div class="no-border bottom-lip"></div>
    
    <div class="tooth tooth1"></div>
    <div class="tooth tooth2"></div>
    <div class="tooth tooth3"></div>
    <div class="tooth tooth4"></div>
    <div class="tooth tooth5"></div>
    <div class="tooth tooth6"></div>
    <div class="no-border tooth tooth7"></div>
    <div class="no-border teeth"></div>
    
    <div class="top-lip"></div>
    <div class="no-border top-lip2"></div>
    <div class="cheek"></div>
    <div class="nose-curl"></div>
    </div>
</div>`
    },
    {
        name: "ned-flanders",
        element: `<div class="ned-flanders">
    <div class="head">
        <div class="hair-top hair"></div>
        <div class="hair-side hair"></div>
        <div class="no-border neck-bottom"></div>
        <div class="no-border neck-left"></div>
        <div class="body lip"></div>
        <div class="no-border body head-main"></div>
        <div class="no-border hair-line1 hair-line"></div>
        <div class="no-border hair-line2 hair-line"></div>
        <div class="no-border hair-line3 hair-line"></div>
        <div class="no-border hair-line4 hair-line"></div>
        <div class="no-border hair-line5 hair-line"></div>
        <div class="body head-top"></div>
        <div class="no-border body eye-bulge"></div>
        <div class="no-border body head-top-inner"></div>
        <div class="no-border neck-right"></div>
        <div class="body ear">
        <div class="no-border inner"></div>
        </div>
        <div class="no-border sideburn hair"></div>
        <div class="no-border body head-side"></div>
        
        <div class="left-eye eye">
        <div class="no-border pupil"></div>
        <div class="no-border body eyelid-top"></div>
        <div class="no-border body eyelid-bottom"></div>
        </div>
        
        <div class="right-eye eye">
        <div class="no-border pupil"></div>
        <div class="no-border body eyelid-top"></div>
        <div class="no-border body eyelid-bottom"></div>
        </div>
        
        <div class="no-border glasses"></div>
        
        <div class="no-border mouth-top"></div>
        <div class="no-border mouth-left"></div>
        <div class="no-border mouth-right"></div>
        <div class="no-border mouth-bottom"></div>
        <div class="no-border mouth-inner"></div>
        <div class="no-border tongue"></div>
        
        <div class="moustache">
        <div class="no-border moustache-hair1 hair left"></div>
        <div class="no-border moustache-hair2 hair left"></div>
        <div class="no-border moustache-hair3 hair left"></div>
        <div class="no-border moustache-hair4 hair right"></div>
        <div class="no-border moustache-hair5 hair right"></div>
        <div class="no-border moustache-hair6 hair right"></div>
        </div>
        
        <div class="body nose"></div>
    </div>
</div> `
    },
    {
        name: "ralph-wiggum",
        element: `<div class="ralph-wiggum">
    <div class="head">
        
        <div class="body head1"></div>
        <div class="no-border body head2"></div>
        <div class="hair hair-left hair1"></div>
        <div class="hair hair-left hair2"></div>
        <div class="hair hair-left hair3"></div>
        <div class="hair hair-left hair4"></div>
        <div class="hair hair-left hair5"></div>
        <div class="hair hair-left hair6"></div>
        <div class="hair hair-left hair7"></div>
        <div class="hair hair-right hair8"></div>
        <div class="hair hair-right hair9"></div>
        <div class="hair hair-right hair10"></div>
        <div class="hair hair-right hair11"></div>
        <div class="hair hair-right hair12"></div>
        
        <div class="body ear">
        <div class="inner1"></div>
        <div class="inner2"></div>
        <div class="no-border body clip"></div>
        </div>
        
        <div class="no-border body mouth5"></div>
        <div class="body mouth1"></div>
        <div class="no-border body mouth2"></div>
        <div class="no-border body mouth3"></div>
        <div class="no-border body mouth4"></div>
        
        <div class="left-eye eye">
        <div class="no-border pupil"></div>
        </div>
        
        <div class="right-eye eye">
        <div class="no-border pupil"></div>
        </div>
        
        <div class="body nose"></div>
    </div>
</div>`
    }
];

for (let i = 0; i < setting.height; i++) {
    for (let j = 0; j < setting.width; j++) {
        const article = document.createElement('article');
        article.classList.add('card');
        article.classList.add('hide');
        const element = cards[Math.floor(Math.random() * cards.length)];
        article.innerHTML = `${element.element}`;
        grid.appendChild(article)
    }
}
let last;
for (let i = 0; i < document.getElementsByTagName('article').length; i++) {
    document.getElementsByTagName('article')[i].onclick = function (event) {
        event.preventDefault;
        document.getElementsByTagName('article')[i].classList.remove('hide');
        if (last !== document.getElementsByTagName('article')[i].getElementsByTagName('div')[0].classList.value) {
            setTimeout(function () {
                document.getElementsByTagName('article')[i].classList.add('hide');
            }, 1000)
        }
        last = document.getElementsByTagName('article')[i].getElementsByTagName('div')[0].classList.value;
    }
}