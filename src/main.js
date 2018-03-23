import './styles.css';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DoctorLookup } from './DoctorLookup.js';


$(document).ready(function() {
  let newDoctorLookup = new DoctorLookup("placeholder");
  let doctorDisplay = function displayResults(array){

  }
  newDoctorLookup.betterDoctorSearch(doctorDisplay);
  $('#doctorSearchFormButton').click(function(){
    let search = $('#doctorSearchInput').val();
  })
});
