// type Status = {
//     statusid: number;
//     sensorcode: number;
//     watering: boolean;
//     fertilizing: boolean;
//     pestdetection: boolean;
// }

export default function StatusCard() {
    return (
        <div className="font-nunito flex bg-white justify-start py-10 md:flex-row mx-16">
            <div className="flex flex-col w-40 leading-normal">
                <p className="mb-3 font-bold text-xl text-gray-900 w-11/12">Status ID</p>
                <p className="my-3 font-bold text-xl text-gray-900 w-11/12">Sensor Code</p>
                <p className="my-3 font-bold text-xl text-gray-900 w-11/12">Watering</p>
                <p className="my-3 font-bold text-xl text-gray-900 w-11/12">Fertilizing</p>
                <p className="my-3 font-bold text-xl text-gray-900 w-11/12">Pest Detection</p>
            </div>
            <div className="flex flex-col w-2 leading-normal">
                <p className="mb-3 font-semibold text-xl text-gray-900 w-11/12">:</p>
                <p className="my-3 font-semibold text-xl text-gray-900 w-11/12">:</p>
                <p className="my-3 font-semibold text-xl text-gray-900 w-11/12">:</p>
                <p className="my-3 font-semibold text-xl text-gray-900 w-11/12">:</p>
                <p className="my-3 font-semibold text-xl text-gray-900 w-11/12">:</p>
            </div>
            <div className="flex flex-col w-5/6 leading-normal ms-2">
                <p className="mb-3 font-normal text-xl text-gray-900 w-11/12">1</p>
                <p className="my-3 font-normal text-xl text-gray-900 w-11/12">101</p>
                <p className="my-3 font-normal text-xl text-gray-900 w-11/12">True</p>
                <p className="my-3 font-normal text-xl text-gray-900 w-11/12">False</p>
                <p className="my-3 font-normal text-xl text-gray-900 w-11/12">True</p>
            </div>
        </div>
    )
}