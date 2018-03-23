import './styles.css'
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import { DoctorLookup } from './DoctorLookup.js'



$(document).ready(function() {

  $('#doctorSearchFormButton').click(function(){

    let search = $('#doctorSearchInput').val()
    let newDoctorLookup = new DoctorLookup(search)
    let doctorDisplay = function displayResults(array){
      $('#doctorResults').html('')
      if (array[0] === undefined){
        $('#doctorResults').html('<h1>No results found</h1>')
      } else {
        for(let i = 0; i < 10; i++){
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
          }
          $('#doctorResults').append(
            `<div class="doctorCard" id=${doctor.Id}>` +
            `<h2>${doctor.Name}</h2>` +
            `<div class="row cardTop">` +
              `<div class="col-md-2"><img src="${doctor.Picture}"></div>` +
              `<div class="col-md-10">` +
                `<p><b>${doctor.Practice}</b><br>`+
                `${doctor.Address.city}, ${doctor.Address.state}<br>` +
                `${doctor.Address.street} ${doctor.Address.zip}</p>` +
              `</div>` +
            `</div>` +
            `<div class="row cardBio">` +
              `<p>${doctor.Bio}</p>` +
              `</div>` +
            `</div>`
          )
        }
      }
    }
    newDoctorLookup.betterDoctorSearch(doctorDisplay)
  })




})
