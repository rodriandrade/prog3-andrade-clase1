import React from 'react';
import '../App/index.css';
import Header from '../Header';
import Form from '../Form';
import Button from '../Button';
import Wrapper from '../Wrapper';
import Card from '../Card';
import Avatar from '../Avatar';
import Name from '../Name';
import Genre from '../Genre';
import Dropdown from '../Dropdown'
import Modal from '../Modal'
import faker from 'faker';

// function App() {
//     //funciones propias
//   return (
//     <div className="App">
//         <Header />
//         <Wrapper />
//         <Footer texto="Este es mi footer horrible" fecha="11/06/2020" />
//     </div>
//   );
// }

class App extends React.Component {
  constructor(props) {
      super(props)
      //INICIALIZAR STATE

      const employees = Array.from({ length: 30 }, () => ({
        name: faker.name.findName(),
        sector: faker.name.jobArea(),
        avatar: faker.image.avatar(),
        id: faker.random.uuid(),
      }))


      const musicians = [
        {
            name: "Armin Van Buuren",
            genre: "Uplifting Trance",
            avatar: "https://yt3.ggpht.com/a-/AAuE7mD8HUuGQqn3rENzEUYP2VS1b0vXeUKOPQ2yTQ=s900-mo-c-c0xffffffff-rj-k-no",
            id: 1
        },
        {
            name: "Above & Beyond",
            genre: "Progressive Trance",
            avatar: "https://venueeventartist.com/imateq/artist/97/1165/900SC0/421314.jpg",
            id: 2
        },
        {
            name: "Coldplay",
            genre: "Pop & Rock",
            avatar: "https://i.musicaimg.com/letras/500x500/coldplay.jpg",
            id: 3
        },
        {
            name: "Keane",
            genre: "Pop & Rock",
            avatar: "https://i1.sndcdn.com/avatars-000755265571-ljivvz-t500x500.jpg",
            id: 4
        },
        {
            name: "Boris Brejcha",
            genre: "Techno",
            avatar: "https://i1.sndcdn.com/avatars-000345692174-yb74et-t500x500.jpg",
            id: 5
        },
        {
            name: "Yotto",
            genre: "Deep House",
            avatar: "https://www.abc.net.au/cm/rimage/11414146-1x1-large.jpg?v=2",
            id: 6
        },
        {
            name: "CHVRCHES",
            genre: "Synth Pop",
            avatar: "https://paraisofestival.com/wp-content/uploads/2019/02/chvrches-600x600.jpg",
            id: 7
        },
        {
            name: "Depeche Mode",
            genre: "Synth Pop",
            avatar: "https://universal881.com/wp-content/uploads/cache_img/Podcast_20170706_Carambola_Integrantes_DepecheMode-nb4yfaz800g2rbhc4eky8g5ko5xxykfhvznub70epc.jpg",
            id: 8
        },
        {
            name: "Andrew Bayer",
            genre: "Progressive Trance",
            avatar: "https://geo-media.beatport.com/image/7af16418-1440-4602-aae3-cabebc61d76d.jpg",
            id: 9
        },
        {
            name: "Charlotte De Witte",
            genre: "Techno",
            avatar: "https://i1.sndcdn.com/artworks-000525842640-cdw4oc-t500x500.jpg",
            id: 10
        },
        {
            name: "deadmau5",
            genre: "Progressive House",
            avatar: "https://crssbeat.com/wp-content/uploads/Deadmau5-Firefly-Music-Festival-e1466506491647.png",
            id: 11
        },
        {
            name: "Delta Heavy",
            genre: "Drum 'n' Bass",
            avatar: "https://vignette.wikia.nocookie.net/monstercat/images/7/79/Delta_Heavy.jpg/revision/latest?cb=20171007204928",
            id: 12
        },
        {
            name: "The Chemical Brothers",
            genre: "Electrónica",
            avatar: "https://www.osondocamino.es/wp-content/uploads/2020/03/chemical.jpg",
            id: 13
        },
        {
            name: "Lifehouse",
            genre: "Pop & Rock",
            avatar: "https://lastfm.freetls.fastly.net/i/u/500x500/fe8b900becbc4951ad8218df7defed50.jpg",
            id: 14
        },
        {
            name: "Craig Connelly",
            genre: "Uplifting Trance",
            avatar: "https://content-images.p-cdn.com/images/0a/fe/e8/20/cec14ccd8b9347e15246d339/_500W_500H.jpg",
            id: 15
        },
        {
            name: "Ilan Bluestone",
            genre: "Progressive Trance",
            avatar: "https://i1.sndcdn.com/avatars-000182018830-2aqhyk-t500x500.jpg",
            id: 16
        },
        {
            name: "Daft Punk",
            genre: "Electrónica",
            avatar: "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/500x500.jpg",
            id: 17
        },
        {
            name: "Digitalism",
            genre: "Electrónica",
            avatar: "https://i1.sndcdn.com/avatars-000336759736-qlz4jc-t500x500.jpg",
            id: 18
        },
        {
            name: "Muse",
            genre: "Rock",
            avatar: "https://lh3.googleusercontent.com/proxy/IWjVIXPozLglASRqWvYJFz_tBbXa3dVQILGfzsIbg7c56YRnQJcBEHYdy4TGNIGIBjWtKR5ZENyb37xPYKi65FbQ2habfIj5I4rzqQoFAiayZmKABVY5hWgGqQIRXJ5PuVzFr-XvyYDBzwkKhA",
            id: 19
        },
        {
            name: "Aly & Fila",
            genre: "Uplifting Trance",
            avatar: "https://loff.it/wp-content/uploads/2015/04/loffit-shine-aly-y-fila-y-roxanne-emery-03.jpg",
            id: 20
        },
        {
            name: "ANNA",
            genre: "Techno",
            avatar: "https://geo-static.traxsource.com/files/artists/3616.jpg",
            id: 21
        },
        {
            name: "Factor B",
            genre: "Uplifting Trance",
            avatar: "https://partyflock.nl/images/artist/96618_500x500_461513/Factor-B.jpg",
            id: 22
        },
        {
            name: "Tinlicker",
            genre: "Deep House",
            avatar: "https://i1.sndcdn.com/artworks-000629901082-ym8rza-t500x500.jpg",
            id: 23
        },
        {
            name: "Spencer Brown",
            genre: "Deep House",
            avatar: "https://i1.sndcdn.com/artworks-000518752722-lg9k4z-t500x500.jpg",
            id: 24
        },
        {
            name: "Joris Voorn",
            genre: "Techno",
            avatar: "https://www.nightclubber.com.ar/foro/attachment.php?attachmentid=62977&d=1539817188",
            id: 25
        },
        {
            name: "LTN",
            genre: "Progressive Trance",
            avatar: "https://i1.sndcdn.com/avatars-000757781617-gjo2c3-t500x500.jpg",
            id: 26
        },
        {
            name: "Breaking Benjamin",
            genre: "Metal",
            avatar: "https://cdns-images.dzcdn.net/images/artist/d777a4bd83204bfc760f7ae152dd80ea/500x500.jpg",
            id: 27
        },
        {
            name: "Alpha 9",
            genre: "Progressive Trance",
            avatar: "https://lh3.googleusercontent.com/proxy/OYsGRgBYczery-LtzxqTaNwDO538Bx8bx2gZz3GjJo7Ccg1ro8cLXoBME0clhgk2P0LQOEI5qWNIsAQtLqBhL53MWKNmMOm7HKinswpkslq4-jJrUI3C3hoEITBZOhP5tnkVYCJhwmh-xtaVSbv8cQS4vJ0uZ9mXVUo07WP6RB6ooZk3Wlzbb5MkMclD",
            id: 28
        },
        {
            name: "Myon",
            genre: "Progressive Trance",
            avatar: "https://vignette.wikia.nocookie.net/anjunafamily/images/6/62/Myon.jpg/revision/latest?cb=20190101152247",
            id: 29
        },
        {
            name: "Genix",
            genre: "Progressive Trance",
            avatar: "https://i1.sndcdn.com/avatars-000641543082-e5mks5-t500x500.jpg",
            id: 30
        },
        {
            name: "Richard Durand",
            genre: "Uplifting Trance",
            avatar: "https://thumbnailer.mixcloud.com/unsafe/600x600/extaudio/f/4/1/3/7846-0bf5-48da-b642-596dbf0bb162.jpg",
            id: 31
        },
        {
            name: "Alex M.O.R.P.H",
            genre: "Uplifting Trance",
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQYrvyvrD_ZmKDGSmFywJyFTVz4w6NdABdzLw&usqp=CAU",
            id: 32
        },
        {
            name: "Eric Prydz",
            genre: "Progressive House",
            avatar: "https://d81n62uc1wl2dzuym4pgd5vr-wpengine.netdna-ssl.com/wp-content/uploads/2018/03/eric-prydz-600x600.jpeg",
            id: 33
        },
        {
            name: "Reinier Zonneveld ",
            genre: "Techno",
            avatar: "https://whenwedip.com/wp-content/uploads/2018/10/26962219_1554104984666045_1805802776694762134_o-e1540909681227.jpg",
            id: 34
        },
        {
            name: "Radiohead",
            genre: "Rock",
            avatar: "https://a2-images.myspacecdn.com/images03/2/9029e794e1d847c19475e4a8867495d1/600x600.jpg",
            id: 35
        },
        {
            name: "Ciaran McAuley",
            genre: "Uplifting Trance",
            avatar: "https://stat.ameba.jp/user_images/20190411/18/kailas-m/a7/d9/j/o0600060014389301803.jpg?caw=800",
            id: 36
        },
        {
            name: "Red",
            genre: "Metal",
            avatar: "https://domaincle.com/wp-content/uploads/2018/09/Red.jpg",
            id: 37
        },
        {
            name: "Owl City",
            genre: "Synth Pop",
            avatar: "https://i.pinimg.com/originals/ab/44/17/ab44172db6f157270cee9d52cca8cec1.jpg",
            id: 38
        },
        {
            name: "Gustavo Cerati",
            genre: "Rock",
            avatar: "https://arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/IQWDYN3P5NCYZGJCMNCOP5LM6A.jpg",
            id: 39
        },
        {
            name: "Blastoyz",
            genre: "Psy Trance",
            avatar: "https://e-cdns-images.dzcdn.net/images/artist/7673d03df183e3d0a170548c19d55d7c/500x500.jpg",
            id: 40
        },
        {
            name: "M83",
            genre: "Synth Pop",
            avatar: "https://studiosol-a.akamaihd.net/letras/500x500/fotos/b/5/b/3/b5b381b2cab788ce44732c27746d2017.jpg",
            id: 41
        },
        {
            name: "Susanne Sundfør",
            genre: "Synth Pop",
            avatar: "https://lastfm.freetls.fastly.net/i/u/500x500/13a1eea42dfde1e4382097daf5197432",
            id: 42
        },
        {
            name: "Arctic Moon",
            genre: "Uplifting Trance",
            avatar: "https://i1.sndcdn.com/artworks-000159099108-iute99-t500x500.jpg",
            id: 43
        },
        {
            name: "Pendulum",
            genre: "Drum 'n' Bass",
            avatar: "https://www.femalefirst.co.uk/image-library/square/500/n/new-pendulum_08,10.jpg",
            id: 44
        },
        {
            name: "Vini Vici",
            genre: "Psy Trance",
            avatar: "https://cdn.shopify.com/s/files/1/0385/6229/files/viniviciwebsitepicraw_grande.jpg?v=1514767408",
            id: 45
        },
        {
            name: "Tomas Heredia",
            genre: "Progressive Trance",
            avatar: "https://vignette.wikia.nocookie.net/trance/images/d/d7/Tomas_Heredia.jpg/revision/latest?cb=20190515210635",
            id: 46
        },
        {
            name: "Chris Schweizer",
            genre: "Uplifting Trance",
            avatar: "https://i1.sndcdn.com/avatars-Jc8A0a4STUubvsZC-TGgaEw-t500x500.jpg",
            id: 47
        },
        {
            name: "Nox Vahn",
            genre: "Deep House",
            avatar: "https://www.thissongslaps.com/wp-content/uploads/2019/11/avatars-000599604405-c63zol-t500x500.jpg",
            id: 48
        },
        {
            name: "Justice",
            genre: "Electrónica",
            avatar: "https://i1.sndcdn.com/avatars-000204434015-8y5szc-t500x500.jpg",
            id: 49
        },
        {
            name: "Red Hot Chili Peppers",
            genre: "Rock",
            avatar: "https://a4-images.myspacecdn.com/images04/3/48967ab6a7394ff8b1bbf232497c14fb/600x600.jpg",
            id: 50
        },
        {
            name: "Sixx:A.M.",
            genre: "Metal",
            avatar: "https://lh3.googleusercontent.com/proxy/A4N7ft1KMBzqDQpD01-yLo_fWxI0lPmB_FlxcOfp_XhptS1_I9NLA-fQo5bku-5cKM77aJbd2Ako84QmwUVVkB_qvAXH1ytaPqXpId_Hf3VJ1eAn",
            id: 51
        },
        {
            name: "Richie Hawtin",
            genre: "Techno",
            avatar: "https://lh3.googleusercontent.com/proxy/BnlnEPxNW-DI3InwLqODjHvem2Nozvz-aJq4OmBKljJAo2vwpbyE2VjYelJ2bUTTm2btrxiZX-eF71N4uETDlo0yJoDzSGba7NITR6JB43ZjCTfuMxotINqREAIFIlgNYdS0YLMBUDUMgECFOEXJjTM43q0NmLlHYa-izPJGbqTAjxQxek9Fyo8NemXllMxHcA",
            id: 52
        },
        {
            name: "Röyksopp",
            genre: "Electrónica",
            avatar: "https://d11mgq5hlnsdgo.cloudfront.net/c397a960-0b1f-4e76-9e77-8469aa5ddbcf.jpg",
            id: 53
        },
        {
            name: "Chromatics",
            genre: "Synth Pop",
            avatar: "https://img.discogs.com/aAW_g4QzfSneMgDJRsh6bGceRuU=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-12743686-1541110043-2856.jpeg.jpg",
            id: 54
        },
        {
            name: "Astrix",
            genre: "Psy Trance",
            avatar: "https://thumbnailer.mixcloud.com/unsafe/600x600/extaudio/0/f/2/7/0753-3728-449a-93ba-e5ec4fb4a568.jpg",
            id: 55
        },
        {
            name: "Dash Berlin",
            genre: "Progressive House",
            avatar: "https://p2.trrsf.com/image/fget/cf/600/600/images.terra.com/2015/07/09/dash-berlin-facebook.jpg",
            id: 56
        },
        {
            name: "Amelie Lens",
            genre: "Techno",
            avatar: "https://www.selektor.nl/wp-content/uploads/2018/01/amelielens.jpg",
            id: 57
        },
        {
            name: "Sunny Lax",
            genre: "Progressive Trance",
            avatar: "https://i1.sndcdn.com/avatars-000278048543-k2kwp7-t500x500.jpg",
            id: 58
        },

    ];

     this.state = {
        list: musicians,
        listBackup: musicians,
        empleadoDelMes: null,
        employeeName: '',
        genreFilter: '',
        selectedGenre: '',
        modalActive: false,
        nameToEdit: '',
        filterID: ''
     };

     this.handleEmpleadoMesClick = this.handleEmpleadoMesClick.bind(this)
     this.handleAddEmployeeSubmit = this.handleAddEmployeeSubmit.bind(this)
     this.handleAddEmployeeChange = this.handleAddEmployeeChange.bind(this)
  }

  handleEmpleadoMesClick(employeeId){
    this.setState({
        empleadoDelMes:employeeId
    })
    console.log('parametro',employeeId) 
  }

  handleAddEmployeeChange = event => {
    const { value } = event.target
    this.setState({ employeeName: value })
  }

  handleGenreChange = event => {
        const { value } = event.target
        const { listBackup } = this.state
        const listFilteredByGenre = listBackup.filter(musician => musician.genre === value)
        this.setState({ 
            genreFilter: value,
            selectedGenre: value,
            list: listFilteredByGenre
        })
  }

  handleRemoveSelectedGenre = () => {
    this.setState(prevState => ({ list: prevState.listBackup, selectedGenre: '' }))
 }

  handleAddEmployeeSubmit = event => {
    event.preventDefault()
    const { list, employeeName } = this.state
    const randomGenre = ["Progressive Trance", "Uplifting Trance", "Techno", "Pop & Rock", "Rock", "Metal", "Deep House", "Progressive House", "Drum 'n' Bass", "Synth Pop"];

    const newEmployee = {
        name: employeeName,
        genre: randomGenre[ Math.floor(Math.random() * 10) ],
        avatar: faker.image.avatar(),
        id: faker.random.uuid(),
    }

    const newList = [newEmployee, ...list] //Linea importante!
    this.setState({ 
        list: newList,
        
     })
  }

  // La llama el botón DELETE del componente CARD. 
  handleRemoveEmployee = id => {
    const { list } = this.state
    const listWithoutMusician = list.filter(musician => musician.id !== id)
    this.setState({ list: listWithoutMusician })
  }

  // La llama el botón de "EDIT" que está en el componente CARD. Guarda en el state todo lo que aparece en setState
  handleEditMusician = employeeData => {
    const {name, id} = employeeData
    this.setState({
        modalActive: true, // Abre el modal
        nameToEdit: name, // Guarda el nombre del artista en el que se toco EDIT
        filterID: id // Guarda el ID del artista
    })
  }

  // La llama el INPUT del MODAL que está más abajo con el evento ONCHANGE. Guarda lo que el usuario escribe en el input. 
  editArtistName = event =>{
    const { value } = event.target
    this.setState({ nameToEdit: value }) // Guarda el value del input (lo que el usuario escribio)
  }

  // La llama el SUBMIT del FORM del MODAL. Guarda el nombre editado y lo muestra en la CARD. 
  changeArtistName = event => {
    event.preventDefault();
    const { list, filterID, nameToEdit } = this.state
    const newName = list.find(musician => musician.id == filterID); // Busco el artista al que le quiero cambiar el nombre por el ID
    newName.name = nameToEdit; // Le agrego el nombre (va a cambiar en la CARD)
    this.setState({
        modalActive: false
    })
  }

  // CIERRA EL MODAL 
  handleClose = () =>{
    this.setState({
        modalActive: false
    })
}

  componentDidMount() {
      //FETCH DE DATA
      this.setState({
        artists : [
            {
                name: "Armin Van Buuren",
                genre: "Uplifting Trance",
                avatar: "https://updatemexico.com/wp-content/uploads/2019/10/armin-van-buuren-balance-banner.jpeg"
            },
            {
                name: "Above & Beyond",
                genre: "Progressive Trance",
                avatar: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Above_%26_Beyond_2011.jpg"
            },
            {
                name: "Coldplay",
                genre: "Pop & Rock",
                avatar: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Above_%26_Beyond_2011.jpg"
            },
            {
                name: "Boris Brejcha",
                genre: "Techno",
                avatar: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Above_%26_Beyond_2011.jpg"
            },
            {
                name: "Yotto",
                genre: "Deep House",
                avatar: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Above_%26_Beyond_2011.jpg"
            },
            {
                name: "CHVRCHES",
                genre: "Synth Pop",
                avatar: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Above_%26_Beyond_2011.jpg"
            },
            {
                name: "Depeche Mode",
                genre: "Synth Pop",
                avatar: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Above_%26_Beyond_2011.jpg"
            },
            {
                name: "Andrew Bayer",
                genre: "Progressive Trance",
                avatar: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Above_%26_Beyond_2011.jpg"
            },
            {
                name: "Keane",
                genre: "Pop & Rock",
                avatar: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Above_%26_Beyond_2011.jpg"
            },
            {
                name: "Charlotte De Witte",
                genre: "Techno",
                avatar: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Above_%26_Beyond_2011.jpg"
            },
            {
                name: "deadmau5",
                genre: "Progressive House",
                avatar: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Above_%26_Beyond_2011.jpg"
            },
            {
                name: "Delta Heavy",
                genre: "Drum 'n' Bass",
                avatar: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Above_%26_Beyond_2011.jpg"
            },
            {
                name: "The Chemical Brothers",
                genre: "Electrónica",
                avatar: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Above_%26_Beyond_2011.jpg"
            },
            {
                name: "Lifehouse",
                genre: "Pop & Rock",
                avatar: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Above_%26_Beyond_2011.jpg"
            },
            {
                name: "Craig Connelly",
                genre: "Uplifting Trance",
                avatar: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Above_%26_Beyond_2011.jpg"
            },
            {
                name: "Ilan Bluestone",
                genre: "Progressive Trance",
                avatar: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Above_%26_Beyond_2011.jpg"
            },
            {
                name: "Daft Punk",
                genre: "Electrónica",
                avatar: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Above_%26_Beyond_2011.jpg"
            },
            {
                name: "Digitalism",
                genre: "Electrónica",
                avatar: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Above_%26_Beyond_2011.jpg"
            },
            {
                name: "Digitalism",
                genre: "Electrónica",
                avatar: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Above_%26_Beyond_2011.jpg"
            },
        ]})
  }

  render() {
      //MOSTRAR DATA EN HTML 
      //SE EJECUTA AL INICIO Y CADA VEZ QUE CAMBIA EL STATE
      
      const { modalActive } = this.state;

      return (

          <div className="App">
            <Header />
            <Form 
                handleAddEmployeeSubmit={this.handleAddEmployeeSubmit}
                handleAddEmployeeChange={this.handleAddEmployeeChange}
                employeeName={this.state.employeeName}
            />
            <Dropdown 
                handleSelectGenre={this.handleSelectGenre}
                handleGenreChange={this.handleGenreChange}
                handleRemoveSelectedGenre={this.handleRemoveSelectedGenre}
                selectedGenre = {this.state.selectedGenre}
            />
            <Wrapper 
                employees={this.state.list} 
                handleEmpleadoMesClick={this.handleEmpleadoMesClick} 
                empleadoDelMesID = {this.state.empleadoDelMes}
                handleRemoveEmployee = {this.handleRemoveEmployee}
                handleEditMusician = {this.handleEditMusician}
            />
            
            {modalActive && (
                    <div className='modal is-active'>
                        <div className='modal-background' />
                        <div className='modal-card'>
                            <header className='modal-card-head'>
                                <p className='modal-card-title'>Edit artist name</p>
                                <button onClick={this.handleClose} className='delete' aria-label='close' />    
                            </header>
                            <section className='modal-card-body'>
                                <form onSubmit={this.changeArtistName}  className='form-add-employee'>
                                    <input
                                        className='input'
                                        type='text'
                                        defaultValue={this.state.nameToEdit}
                                        onChange = {this.editArtistName}
                                    />
                                    <button class="button is-primary is-light">Save</button>
                                </form>
                            </section>
                        </div>
                    </div>
                )}

          </div>)
  }
}

export default App;