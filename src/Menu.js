import React from 'react';
import Rice from './ShawarmaRice.png';
import Fries from './ShawarmaFries.png';
import Wrap from './ShawarmaWrap.png';
import Pizza from './ShawarmaPizza.png';
import burger from './Burger.png';
import fries from './Fries.png';
import rice from './Rice.png';
import pasta from './Pasta.png';
import pizza from './Pizza.png';
import wrap from './Wrap.png';
import './Menu.css';
import {Link} from 'react-router-dom';
function Shawarma(){
    return(
 <section>
      <div className="shop">
        <ul className="Dropme">
           <Link to="./rogonzalescayao"><li className="shopee">Login</li></Link>
            <li>Shop</li>
        </ul>
    </div>
  <div id="bg">
      <ul id="bgdrop">
          <li className="left"><img src={Rice} width="300px"/></li>
          <li className="right"><img src={Fries} width="300px"/></li>
          <li className="downleft"><img src={Wrap} width="300px"/></li>
          <li className="downright"><img src={Pizza} width="300px"/></li>
      </ul>
  </div>
     <div className="baligya">
         <ul id="shawarma">
         <li><img src={burger} width="300px" alt=""/><h3>KADAKU GID SANG AMUN BURGER</h3><button>BUY</button></li>
         <li><img src={fries} width="300px" alt=""/><h3>KADAMU GID SANG AMUN FRIES</h3><button>BUY</button></li>
         <li><img src={rice} width="300px" alt=""/><h3>SHAWARMA RICE! WALA EXTRA RICE</h3><button>BUY</button></li>
         <li><img src={pasta} width="300px" alt=""/><h3>BASTA PASTA! MASHARAP</h3><button>BUY</button></li>
         <li><img src={pizza} width="300px" alt=""/><h3>SHAWARMA PIZZA</h3><button>BUY</button></li>
         <li><img src={wrap} width="300px" alt=""/><h3>SHAWARMA WRAP WITH LOVE</h3><button>BUY</button></li>
         </ul>
     </div>
 </section>


    );
}
export default Shawarma;