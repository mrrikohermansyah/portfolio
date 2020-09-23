var cleave = new Cleave('#phone', {
    phone:true,
    phoneRegionCode: 'US'
});

$('#select-country').change(function(){
    cleave.setPhoneRegionCode(this.value);
    cleave.setRawValue('');
});