import { Splide, SplideSlide } from '@splidejs/react-splide';
import coffeBag from '../../assets/pic/cofeebag.png'
import coffeBag2 from '../../assets/pic/cofeebag2.png'

const optionsSlide = {
    rewind : true,
    type: 'loop',
    perPage: 4,
    perMove: 1,
    start: 0,
    focus  : 'left',
}
console.log(coffeBag)
const coffeeCards = [
    {
        img: coffeBag2,
        name: 'Mocha Late',
        desription: `Coffee is a brewed drink prepared from roasted coffee beans, the seeds of berries from certain Coffea species.`,
        numBag: '1',
        price: '69.99'
    },
    {
        img: coffeBag2,
        name: 'Iced Coffee',
        desription: `Coffee is a brewed drink prepared from roasted coffee beans, the seeds of berries from certain Coffea species.`,
        numBag: '1',
        price: '69.99'
    },
    {
        img: coffeBag2,
        name: 'Caramel Frappe',
        desription: `Coffee is a brewed drink prepared from roasted coffee beans, the seeds of berries from certain Coffea species.`,
        numBag: '1',
        price: '69.99'
    },
    {
        img: coffeBag2,
        name: 'Mocha Late',
        desription: `Coffee is a brewed drink prepared from roasted coffee beans, the seeds of berries from certain Coffea species.`,
        numBag: '1',
        price: '69.99'
    },
    {
        img: coffeBag2,
        name: 'Double Espresso',
        desription: `Coffee is a brewed drink prepared from roasted coffee beans, the seeds of berries from certain Coffea species.`,
        numBag: '1',
        price: '69.99'
    },
]


console.log(coffeeCards)
function Card () {
    return (
        <>
         <div className="mt-10">
            <Splide
                options={optionsSlide}
            >
                {
                    coffeeCards.map((m,i) => {
                        return (
                            <SplideSlide className="flex justify-center" key={i}>
                            <div className="w-217 rounded-sm card flex justify-center items-center flex-col p-4 pt-28">
                                <img src={m.img} className="w-36" alt={m.name} />
                                <div className="block w-full text-center">{m.name}</div>
                                <div className="block w-36 text-xs text-coffeeContent text-center">{m.desription}</div>
                                <div className="flex w-full justify-between pl-5 pr-5">
                                    <div className="text-sm text-black">{m.numBag}</div>
                                    <div className="text-sm text-black">${m.price}</div>
                                </div>
                            </div>
                            </SplideSlide>
                        )
                    })
                }
            </Splide>
         </div>
        </>
    )
}

export default Card