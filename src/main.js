import './styles.css'
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import { DoctorLookup } from './DoctorLookup.js'

let searchFunctions = {
  CardBuilder: function(array, i){
    let doctor = {
      Id: array[i].uid,
      Name: array[i].profile.first_name + ' ' + array[i].profile.last_name,
      Bio: array[i].profile.bio,
      Picture: array[i].profile.image_url,
      Practice: array[i].practices[0].name,
      Address: {
        city: array[i].practices[0].visit_address.city,
        state: array[i].practices[0].visit_address.state_long,
        street: array[i].practices[0].visit_address.street,
        zip: array[i].practices[0].visit_address.zip
      },
      Phone: {
        number: array[i].practices[0].phones[0].number,
        type: array[i].practices[0].phones[0].type
      }
    }
    $('#doctorResults').append(
      `<div class="doctorCard" id=${doctor.Id}>` +
      `<div class="row cardName"><h2>${doctor.Name}</h2></div>` +
      `<div class="row cardTop">` +
        `<div class="col-md-3"><img src="${doctor.Picture}"></div>` +
        `<div class="col-md-3></div>"` +
        `<div class="col-md-6">` +
          `<p><b>${doctor.Practice}</b><br>`+
          `${doctor.Address.city}, ${doctor.Address.state}<br>` +
          `${doctor.Address.street} ${doctor.Address.zip}<br>` +
          `${doctor.Phone.number}</p>` +
        `</div>` +
      `</div>` +
      `<div class="row cardBio">` +
        `<p>${doctor.Bio}</p>` +
        `</div>` +
      `</div>`
    )
  }
}

$(document).ready(function() {

  $('#doctorSearchKeywordButton').click(function(){
    let search = $('#doctorKeyword').val()
    let newDoctorLookup = new DoctorLookup(search)
    $('#doctorResults').html('')
    $('#doctorResults').html('<h1>Please wait while the search loads</h1>')
    $('#doctorSearchInput').val('')
    let doctorDisplay = function displayKeywordResults(array){
      $('#doctorResults').html('')
      if (array[0] === undefined){
        $('#doctorResults').html('<h1>No results found</h1>')
      } else {
        for(let i = 0; i < 10; i++){
          searchFunctions.CardBuilder(array, i);
        }
      }
    }
    newDoctorLookup.betterDoctorSearch(doctorDisplay)
  })

  // $('#doctorSearchNameButton').click(function(){
  //   let search = $('#doctorKeywordSearch').val()
  //   let newDoctorLookup = new DoctorLookup(search)
  //   $('#doctorResults').html('')
  //   $('#doctorResults').html('<h1>Please wait while the search loads</h1>')
  //   $('#doctorSearchInput').val('')
  //   let doctorDisplay = function displayKeywordResults(array){
  //     $('#doctorResults').html('')
  //     if (array[0] === undefined){
  //       $('#doctorResults').html('<h1>No results found</h1>')
  //     } else {
  //       for(let i = 0; i < 10; i++){
  //         searchFunctions.CardBuilder(array, i);
  //       }
  //     }
  //   }
  //   newDoctorLookup.betterDoctorSearch(doctorDisplay)
  // })




})
