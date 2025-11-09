function confirmSubmit(event) {
    event.preventDefault();
    
    const form = event.target;

    if (!form.checkValidity()) {
        return; 
    }
    
    let result = confirm('Apakah kamu yakin ingin mengirim saran ini?');
    
    if (result) {
        form.submit();
    } 
}