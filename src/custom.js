document.addEventListener('alpine:init', () => {
    Alpine.data('theFunction',(params = {})=> ({
        open:false,
        
    }))
})