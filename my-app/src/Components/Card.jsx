import React from "react";


function Card(props){
    return(
        /*
        <dl>
            <div className="card">
                <dt><span className="card_heading">{props.title}</span></dt>
                <dd><span>{props.meaning}</span></dd>
            </div>
        </dl>
        */

    <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">
      <div class="card-body">
        <h5 class="card-title">{props.title}</h5>
        <p class="card-text">{props.meaning}</p>
      </div>
    </div>
  </div>
</div>
    );
}

export default Card;
