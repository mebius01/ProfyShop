// const closMap = document.querySelector('.map')
// const mapIcon = document.getElementById('mapIcon')
// const Call = document.querySelector('.call')
// const callIcon = document.getElementById('callIcon')
// const closCall = document.getElementById('fa-times-call')


// mapIcon.addEventListener('click', showMap)
// closMap.addEventListener('click', hideMap)

// callIcon.addEventListener('click', showCall)
// closCall.addEventListener('click', hideCall)

// function showModal(element) {
//   element.classList.add('zoomIn')
//   element.style.display = 'block';
// }

// function hideModal(element) {
//   element.classList.remove('zoomIn')
//   element.style.display = 'none';
// }

// function showMap(e) {
//   e.preventDefault();
//   showModal(closMap)
// }

// function hideMap(e) {
//   e.preventDefault();
//   hideModal(closMap)
// }

// function showCall(e) {
//   e.preventDefault();
//   showModal(Call)
// }

// function hideCall(e) {
//   e.preventDefault();
//   hideModal(Call)
// }

// // export {
// //   showMap,
// //   hideMap,
// //   showCall,
// //   hideCall
// // }



function showHideModal(cls) {
  const element = document.querySelector(cls)
  const clos = element.querySelector('.fa-times')

  function closeWindow() {
    element.classList.remove('zoomIn')
    element.style.display = 'none';
  }

  element.classList.add('zoomIn')
  element.style.display = 'block'
  clos.addEventListener('click', function () {
    closeWindow()
  })

  document.addEventListener('keydown', function (event) {
    if (event.code == 'Escape' || event.keyCode == 27) {
      closeWindow()
    }
  });
}

export default showHideModal