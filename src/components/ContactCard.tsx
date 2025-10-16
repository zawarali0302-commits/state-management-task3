import { useEffect, useState } from "react"

const ContactCard = () => {
    const grossSalary = 50000;
    const [salary, setSalary] = useState<number>(grossSalary)
    const [isOn, setIsOn] = useState<boolean>(false)
    const [isActive, setIsActive] = useState<boolean>(false)


    //better way
    useEffect(() => {
        if (isOn) {
            setSalary(grossSalary - ((grossSalary * 11) / 100))
        }
        else {
            setSalary(grossSalary - ((grossSalary * 22) / 100))
        }
    }, [isOn, grossSalary]);

    // const taxDeduction = (value: boolean) => {
    //     if (value) {
    //         setSalary(grossSalary - ((grossSalary * 11) / 100))
    //     }
    //     else {
    //         setSalary(grossSalary - ((grossSalary * 22) / 100))
    //     }
    // }
    return (
        <div className="flex flex-col p-4 border shadow m-4 gap-2">
            <div className="flex justify-between">
                <div className="flex flex-col items-center">
                    <h1 className="text-4xl font-bold">Hamza</h1>
                    <h1 className="text-gray-500">ID:1</h1>
                </div>
                <h1 className="flex row-span-2">Age:40</h1>
            </div>
            <div className=" flex flex-col items-center gap-2">
            <div className="flex flex-col items-center">
                <h1 className="text-gray-500 text-sm">Date of Birth</h1>
                <h1>5/27/1985</h1>
            </div>
            <div className="flex flex-col items-center">
                <h1 className="text-gray-500 text-sm">Status</h1>
                <h1><button onClick={() => {setIsActive(!isActive)}} className={`p-1 rounded ${isActive? "bg-green-300":"bg-red-300"}`}>
                    {isActive? "Active":"Not Active"}
                    </button></h1>
            </div>
            <div className="flex flex-col items-center">
                <h1 className="text-gray-500 text-sm">Gross Salary</h1>
                <h1>{grossSalary}</h1>
            </div>
            <div className="flex flex-col items-center">
                <h1 className="text-gray-500 text-sm">{`Net Salary(after ${isOn ? "11" : "22"}% tax)`}</h1>
                <h1>{salary}</h1>
            </div>
            </div>
            <div className="flex justify-between">
                <div className="flex gap-2">
                    <h1>is Filer</h1>
                    <button
                        onClick={() => {
                            //const value = !isOn;
                            setIsOn(!isOn)
                            // taxDeduction(value)
                        }

                        }

                        className={`w-14 h-8 flex items-center rounded-full p-1 transition-colors duration-300 
                        ${isOn ? "bg-blue-500" : "bg-gray-400"}`}>
                        <div className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform
                         duration-300 ${isOn ? "translate-x-6" : "translate-x-0"}`}>
                        </div>
                    </button>

                </div>
                <div>DOB:5/27/1985</div>
            </div>
        </div>
    )
}

export default ContactCard
