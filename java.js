
$(document).ready(function() {
  // Add event listeners to the checkboxes
  $('#economy-checkbox, #first-class-checkbox, #business-class-checkbox').on('click', function() {
    // Determine which checkboxes are checked
    var economyChecked = $('#economy-checkbox').prop('checked');
    var firstClassChecked = $('#first-class-checkbox').prop('checked');
    var businessClassChecked = $('#business-class-checkbox').prop('checked');
    

    // Update the text based on which checkboxes are checked
    if (economyChecked && !firstClassChecked && !businessClassChecked) {
      $('#economy-features-text').text('Economy Features');
    } else if (!economyChecked && firstClassChecked && !businessClassChecked) {
      $('#economy-features-text').text('First Class Features');
    } else if (!economyChecked && !firstClassChecked && businessClassChecked) {
      $('#economy-features-text').text('Business Class Features');
    } else {
      $('#economy-features-text').text('Features');
    }




    // Hide all images
    $('.economy-img, .first-class-img, .business-class-img').hide();
    
    // Show selected images based on which checkboxes are checked
    if (economyChecked && !firstClassChecked && !businessClassChecked) {
      $('.economy-img').show();
    } else if (!economyChecked && firstClassChecked && !businessClassChecked) {
      $('.first-class-img').show();
    } else if (!economyChecked && !firstClassChecked && businessClassChecked) {
      $('.business-class-img').show();
    } else if (economyChecked && firstClassChecked && !businessClassChecked) {
      $('.economy-img, .first-class-img').show();
    } else if (economyChecked && !firstClassChecked && businessClassChecked) {
      $('.economy-img, .business-class-img').show();
    } else if (!economyChecked && firstClassChecked && businessClassChecked) {
      $('.first-class-img, .business-class-img').show();
    } else if (economyChecked && firstClassChecked && businessClassChecked) {
      $('.economy-img, .first-class-img, .business-class-img').show();
    } else {
      // If no checkboxes are checked, show all images
      $('.economy-img, .first-class-img, .business-class-img').show();
    }
  });
});





  let DropDown = document.getElementById("DropDown");
  let wrapper = document.getElementById("wrapper")
  function toggleBtn(){
    wrapper.classList.toggle("wrapperOn")
    DropDown.classList.toggle("iconn");
    
  }

  function togglelll() {
    const airDown = document.getElementById("airDown");
    const airDiv = document.getElementById("airlaneDiv");
    
    airDown.classList.toggle("active");
    airDiv.classList.toggle("active");
  }
  

  function toggleTog() {
    const tripDown = document.getElementById("tripDown");
    const TripsDiv = document.getElementById("TripsDiv");
    
    tripDown.classList.toggle("active");
    TripsDiv.classList.toggle("active");
  }


  function toggleKkk() {
    const rating = document.getElementById("rating");
    const arrDown = document.getElementById("ArrDown");
    rating.classList.toggle("show");
    arrDown.classList.toggle("show");
  }
  

  const rangeInput = document.querySelectorAll(".range-input input"),
  priceInput = document.querySelectorAll(".price-input input"),
  range = document.querySelector(".slider .progress");
  let priceGap = 100;
  
 
  rangeInput.forEach(input =>{
      input.addEventListener("input", e =>{
          let minVal = parseInt(rangeInput[0].value),
          maxVal = parseInt(rangeInput[1].value);
  
          if((maxVal - minVal) < priceGap){
              if(e.target.className === "range-min"){
                  rangeInput[0].value = maxVal - priceGap
              }else{
                  rangeInput[1].value = minVal + priceGap;
              }
          }else{
              priceInput[0].value = minVal;
              priceInput[1].value = maxVal;
          }
      });
  });




  let DropDownn = document.getElementById("DropDownn");
  let wrapperino = document.getElementById("wrapperino")
  function toggleBtnn() {
    wrapperino.classList.toggle("wrapperinoOn")  
    DropDownn.classList.toggle("iconer")
    }
    
   

    $('.showMore').click(function (e) {
      e.preventDefault();
      $('.box').toggle('show');
      $(this).text(function(i, text){
      return text === "Show more results" ? "Show less results" : "Show more results";
      })
      });


      
      $(document).ready(function() {
        $('.heart').each(function() {
          $(this).click(function() {
            if ($(this).css('background-color') === 'rgb(141, 211, 187)') {
              $(this).css({
                'background-color': '',
                'color': '',
                'transition': '0.5s'
              });
            } else {
              $(this).css({
                'background-color': '#8DD3BB',
                'color': '#FFF',
                'transition': '0.5s'
              });
            }
          });
        });
      });
      

      const buttons = document.querySelectorAll('.btn');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    buttons.forEach((btn) => {
      btn.classList.remove('active');
    });
    button.classList.add('active');
  });
});

$(document).ready(function() {
  $('.Best').addClass('active');
  $('.Cheapest, .Best, .Quickest, .other').click(function() {
    $('.Cheapest, .Best, .Quickest, .other').removeClass('active');
    $(this).addClass('active');
   
  });
});

let dropdownbtn = document.querySelector('.current1');
let dropcontent = document.querySelector('.droplist1');
let alllists = document.querySelectorAll('.droplist1 li');

dropdownbtn.addEventListener('click', function () {
    dropcontent.classList.toggle('show1')
})

for (const x of alllists) {
    x.addEventListener('click', function () {
        let litext = this.innerText;
        dropdownbtn.innerText = litext;
        dropcontent.classList.remove('show1')
    })
}



let dropdownbtn2 = document.querySelector('.current2');
let dropcontent2 = document.querySelector('.droplist2');
let alllists2 = document.querySelectorAll('.droplist2 li');

dropdownbtn2.addEventListener('click', function () {
    dropcontent2.classList.toggle('show2')
})

for (const y of alllists2) {
    y.addEventListener('click', function () {
        let litext2 = this.innerText;
        dropdownbtn2.innerText = litext2;
        dropcontent2.classList.remove('show2')
    })
}



let dropdownbtn3 = document.querySelector('.current3');
let dropcontent3 = document.querySelector('.droplist3');
let alllists3 = document.querySelectorAll('.droplist3 li');

dropdownbtn3.addEventListener('click', function () {
    dropcontent3.classList.toggle('show3')
})

for (const z of alllists3) {
    z.addEventListener('click', function () {
        let litext3 = this.innerText;
        dropdownbtn3.innerText = litext3;
        dropcontent3.classList.remove('show3')
    })
}

let mydropdown4 = document.querySelector('.mydropdown4');
let dropdownbtn4 = document.querySelector('.current4');
let dropcontent4 = document.querySelector('.droplist4');
let alllists4 = document.querySelectorAll('.droplist4 li');

dropdownbtn4.addEventListener('click', function () {
    dropcontent4.classList.toggle('show4');
    mydropdown4.classList.toggle('color4');
})

for (const c of alllists4) {
    c.addEventListener('click', function () {
        let litext4 = this.innerText;
        dropdownbtn4.innerText = litext4;
        dropcontent4.classList.remove('show4')
        mydropdown4.classList.remove('color4');
    })
}

$(document).ready(function() {
  // Add event listeners to the checkboxes
  $('#economy-checkbox, #first-class-checkbox, #business-class-checkbox').on('click', function() {
    // Determine which checkboxes are checked
    var economyChecked = $('#economy-checkbox').prop('checked');
    var firstClassChecked = $('#first-class-checkbox').prop('checked');
    var businessClassChecked = $('#business-class-checkbox').prop('checked');
    
    // Update the text based on which checkboxes are checked
    if (economyChecked && !firstClassChecked && !businessClassChecked) {
      $('#economy-features-text').text('Economy Features');
    } else if (!economyChecked && firstClassChecked && !businessClassChecked) {
      $('#economy-features-text').text('First Class Features');
    } else if (!economyChecked && !firstClassChecked && businessClassChecked) {
      $('#economy-features-text').text('Business Class Features');
    } else {
      $('#economy-features-text').text('Basic Economy Features');
    }
  });
});
