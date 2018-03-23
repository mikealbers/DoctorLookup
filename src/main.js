import './styles.css'
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import { DoctorLookup } from './DoctorLookup.js'


$(document).ready(function() {

  $('#doctorSearchFormButton').click(function(){
    let search = $('#doctorSearchInput').val()
    console.log(search)
    let newDoctorLookup = new DoctorLookup(search)
    let doctorDisplay = function displayResults(array){
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
          '<div id=' + doctor.Id + '>' +
          '<h3>' + doctor.Name + '</h3>' +
          '<img src="'+ doctor.Picture +'" alt="">' +
          '<p>' + doctor.Bio + '</p>' +
          '</div>'

        )
      }
    }
    newDoctorLookup.betterDoctorSearch(doctorDisplay)
  })
})
