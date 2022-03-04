import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  english=[
    {
    pic:"../../assets/Joker1.jpg",
    title:"Joker"
  },
  {
    pic:"../../assets/avengers img.jpg",
    title:"Avengers"
  },
  {
    pic:"../../assets/dc img.jpg",
    title:"DC"
  },
  {
    pic:"../../assets/Fast and Furious img.jpg",
    title:"Fast & Furious"
  }
]
english1=[
  {
    pic:"../../assets/conjuring img.jpg",
    title:"The Conjuring"
  },
  {
    pic:"../../assets/IamLegend img.jpg",
    title:"I am Legend"
  },
  {
    pic:"../../assets/World_War_Z_.jpg",
    title:"World War Z"
  },
  {
    pic:"../../assets/Titanic img.png",
    title:"Titanic"
  }
]
tamil=[
  {
  pic:"../../assets/ao.jfif",
  title:"Aayirathil Oruvan"
},
{
  pic:"../../assets/d16.jpg",
  title:"D-16"
},
{
  pic:"../../assets/vikramvedha.jpg",
  title:"Vikram Vedha"
},
{
  pic:"../../assets/vc.jpg",
  title:"Vada Chennai"
}
]
tamil1=[
  {
    pic:"../../assets/kaththi.jpg",
    title:"Kaththi"
  },
  {
    pic:"../../assets/24.jpg",
    title:"24"
  },
  {
    pic:"../../assets/mankatha.jpg",
    title:"Mankatha"
  },
  {
    pic:"../../assets/k.gif",
    title:"Kanaa"
  }
]
malayalam=[
  {
    pic:"../../assets/charlie.jfif",
    title:"Charlie"
  },
  {
    pic:"../../assets/hridhayam.jpg",
    title:"Hridhayam"
  },
  {
    pic:"../../assets/kumbalangi.jpg",
    title:"Kumbalangi nights"
  },
  {
    pic:"../../assets/minnal.jpg",
    title:"Minnal Murali"
  }
]
malayalam1=[
  {
    pic:"../../assets/premam.jpg",
    title:"Premam"
  },
  {
    pic:"../../assets/p.jpg",
    title:"The Priest"
  },
  {
    pic:"../../assets/drish.png",
    title:"Drishyam"
  },
  {
    pic:"../../assets/bangalore.jfif",
    title:"Bangalore Days"
  }
]
trend=[
  {
    title:"Kurup",
    language:"Malayalam"
},
{
  title:"Minnale",
  language:"Tamil"
},
{
  title:"Ae dil hai mushkil",
  language:"Hindi"
},
{
  title:"Rab ne bana di jodi",
  language:"Hindi"
}
]
trend1=[
  {
    title:"Soorarai potru",
    language:"Tamil"
},
{
  title:"Valimai",
  language:"Tamil"
},
{
  title:"Trance",
  language:"Malayalam"
},
{
  title:"Sultan",
  language:"Tamil"
}
]
screen=[
  {img:"https://www.thenewsminute.com/sites/default/files/styles/news_detail/public/HiQ%20%2819%29.JPG?itok=xZCpsuQ9"},
  {img:"https://images.unsplash.com/photo-1595769816263-9b910be24d5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bW92aWUlMjBzY3JlZW58ZW58MHx8MHx8&w=1000&q=80"},
  {img:"https://bizimages.withfloats.com/actual/5a32180f71271501fcc81e0c.jpg"},
  {img:"http://severtsonscreens.com/wp-content/uploads/2016/07/CPMSINTERIOR39.jpg"}
]
cafeteria=[
  {img:"https://im1.dineout.co.in/images/uploads/restaurant/sharpen/8/e/s/p89629-161528935960475c0f3602b.jpg?tr=tr:n-xlarge"},
  {img:"https://im1.dineout.co.in/images/uploads/restaurant/sharpen/4/f/c/p46622-164158031361d887190a07d.jpg?tr=tr:n-xlarge"},
  {img:"https://b.zmtcdn.com/data/pictures/7/18415387/cf0d2ecb8cd434222b403375831fd1c8.jpg?fit=around|750:500&crop=750:500;*,*"},
  {img:"https://static.toiimg.com/photo/48004575.cms"}
]
}
