import 'dayschedule-widget/dist/dayschedule-popup.css'
import 'dayschedule-widget/dist/dayschedule-widget.js'

function DatePicker() {
    function handleClick() {
        daySchedule.initPopupWidget({
            url: 'https://barbaratess.dayschedule.com/consultation',
            type: 'popup',
            color: {
                primary: '#dc3545',
                secondary: '#ffffff',
            },
        })
    }
    return (
        <button
            type='button'
            className='rounded-md w-min text-center bg-black text-white hover:bg-translucent-red hover:text-black px-2 py-1 text-sm font-normal md:w-max md:px-3 md:py-2 md:font-medium'
            onClick={handleClick}
        >
            Book an appointment
        </button>
    )
}

export default DatePicker
