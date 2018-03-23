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

    }
    newDoctorLookup.betterDoctorSearch(doctorDisplay)
  })
})
