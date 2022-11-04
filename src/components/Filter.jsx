import React,{useState, useEffect, useCallback} from "react";
import './css/sewa.css';
import './css/responsive.css';
import { Button } from "@mui/material";
import NotFound from "./NotFound";




function Filter(){

    const [cars, setCars] = useState([]);
    const [driverType, setDriverType] = useState('Pilih TypDriver')
    const [date, setDate] = useState('');
    const [time, setTime] = useState('')
    const [capacity, setCapacity] = useState(0);
    const [displayCars, setDisplayCars] = useState([]);

    const populateCars = useCallback((cars) => {
        return cars.map((car) => {
            const isPositive = getRandomInt(0, 1) === 1;
            const timeAt = new Date();
            const mutator = getRandomInt(1000000, 100000000);
            const availableAt = new Date(timeAt.getTime() + (isPositive ? mutator : -1 * mutator));
            return {
                ...car,
                availableAt,
                
            };
        });
    }, []);




    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json')
        .then((response)=> response.json())
        .then((data)=>{
            const newData = populateCars(data)
            setCars(newData);
        })
        .catch((err)=>{
        console.log(err)
        })
    },[populateCars]);

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    const handleSearchCar = () => {

        // console.log(driverType, date, time, capacity);

        const dateTime = new Date(`${date} ${time}`);
        console.log(dateTime)

        if (dateTime === 'Invalid Date') { 
            return alert('Harap pilih tanggal yang benar');;
        } else if (capacity <= 0) {
            return alert('Harap masukan jumlah penumpang!');
        } else {
            const filtercars = cars.filter((item)=>(item.capacity >= capacity && item.availableAt <= dateTime && item.available === true));
            setDisplayCars(filtercars);
        }
    }

    const handleReset = () => {
        setDisplayCars([]);
        setDate('');
        setTime('');
        setCapacity('');
        setDriverType('Pilih Tipe Driver');
        
    }
return(
    <>
        <section className="container-lg justify-content-center my-5" id="cari">
            <form action="">
                <div className="row d-flex ms-auto me-auto" >
                        <div className="col-lg col-md-6 col-sm-6 col-xs-12 p-2">
                            <label className="pb-2">Tipe Driver</label>
                            <select className="form w-100" id="" required  onChange={((e)=>setDriverType(e.target.value))} >
                                <option value={driverType} hidden>Pilih Tipe Driver</option>
                                <option value="True">Dengan Supir</option>
                                <option value="True">Tanpa Supir(Lepas Kunci)</option>
                            </select>
                        </div>
                        <div className="col-lg col-md-6 col-sm-6 col-xs-12 p-2">
                            <label className="pb-2">Tanggal</label>
                            <input value={date} type="date" id="filterDate" className="form" required onChange={(e)=>setDate(e.target.value)}/>
                        </div>
                        <div className="col-lg col-md-6 col-sm-6 col-xs-12 p-2" style={{minWidth: '200px'}}>
                            <label className="pb-2">Waktu Jemput/Ambil</label>
                            <input value={time} type="time" id="filterTime" className="form" required onChange={(e)=>setTime(e.target.value)}/>
                        </div>
                        <div className="col-lg col-md-6 col-sm-6 col-xs-12 p-2" style={{minWidth: '200px'}}>
                            <label className="pb-2">Jumlah Penumpang</label>
                            <input value={capacity} type="number" className="form" id="filterCapacity" placeholder="Jumlah Penumpang" onChange={(e)=>setCapacity(e.target.value)}/>
                        </div>
                        <div className="col-lg col-md-6 col-sm-6 col-xs-12 p-2 pt-5" style={{display: 'inline-block', alignSelf: 'flex-end', height: '100%', minWidth: '224px'}}>
                            <Button variant="contained" sx={{width:'99px', textTransform:'none',}} color="success" onClick={handleSearchCar}>Cari Mobil</Button>
                            <Button variant="outlined" sx={{width:'99px', textTransform:'none', marginLeft:'10px'}} color="error" onClick={handleReset} type='reset'>Reset</Button>
                        </div>
                </div>
            </form>
            <div className="row row-cols-auto justify-content-start ms-auto me-auto d-flex cars-content mt-5">
                {/* <!-- Data JSON --> */}
                {
                    displayCars.length > 0 ? (
                        displayCars.map((item)=>(
                            <div className="card crd col-4" style={{maxWidth: "22rem", marginRight:'30px', marginBottom: '50px'}} key={item.id}>
                                <img src= {item.image} className="card-img-top img-fluid mt-3" alt={item.image} style={{height: '190px', objectFit: 'cover'}} />
                                <div style={{padding:"28.17px"}}>
                                    <p className="judul-card">{item.manufacture} / {item.model}</p>
                                    <h5 className="card-title">Rp.{item.rentPerDay}/Hari</h5>
                                    <p className="" style={{minHeight:"100px"}}>{item.description}</p>
                                    <div className="my-2"><i className="bi bi-people me-2"></i>{item.capacity} Orang</div>
                                    <div className="my-2"><i className="bi bi-gear me-2"></i> {item.transmission}</div>
                                    <div className="my-2"><i className="bi bi-calendar4 me-2"> {item.year}</i></div>
                                    <div className="my-2"><i className="bi bi-calendar4 me-2"> {item.availableAt.toString()}</i></div>
                                    <a href="##" className="btn btn-success text-white w-100 mt-2 fw-bold mt-4" style={{fontSize: "14px"}}>Pilih Mobil</a>      
                                </div>
                            </div>    
                        ))) : <NotFound/>    
                }
            </div>
        </section>
        <section className="container-lg">
            
        </section>
    </>
    )
}

export default Filter