import { useEffect, useState } from "react"
import type { User } from "../App";
interface ContactCardProps {
    user: User;
}
const ContactCard = ({ user }: ContactCardProps) => {
    // const [person,setPerson] = useState<User>(user)
    const [salary, setSalary] = useState<number>(user.grossSalary)
    const [isOn, setIsOn] = useState<boolean>(false)


    //better way
    useEffect(() => {
        if (isOn) {
            setSalary(user.grossSalary - ((user.grossSalary * 11) / 100))
        }
        else {
            setSalary(user.grossSalary - ((user.grossSalary * 22) / 100))
        }
    }, [isOn, user.grossSalary]);

    return (
        <div className="flex flex-col p-4 border shadow m-4 gap-2">
            <div className="flex justify-between">
                <div className="flex flex-col items-center">
                    <h1 className="text-4xl font-bold">{user.name}</h1>
                    <h1 className="text-gray-500">ID:{user.id}</h1>
                </div>
                <h1 className="flex row-span-2">Age:{user.age}</h1>
            </div>
            <div className=" flex flex-col items-center gap-2">
                <div className="flex flex-col items-center">
                    <h1 id="head">Date of Birth</h1>
                    <h1>{user.birth}</h1>
                </div>
                <div className="flex flex-col items-center">
                    <h1 id="head">Status</h1>
                    <h1 className={`p-1 rounded ${user.status ? "bg-green-300" : "bg-red-300"}`}>
                        {user.status ? "Active" : "Not Active"}
                    </h1>
                </div>
                <div className="flex flex-col items-center">
                    <h1 id="head">Gross Salary</h1>
                    <h1>{user.grossSalary}</h1>
                </div>
                <div className="flex flex-col items-center">
                    <h1 id="head">{`Net Salary(after ${isOn ? "11" : "22"}% tax)`}</h1>
                    <h1>{salary}</h1>
                </div>
            </div>
            <div className="flex justify-between">
                <div className="flex gap-2">
                    <h1>is Filer</h1>
                    <button
                        onClick={() => {
                            setIsOn(!isOn)
                        }

                        }

                        className={`w-14 h-8 flex items-center rounded-full p-1 transition-colors duration-300 
                        ${isOn ? "bg-blue-500" : "bg-gray-400"}`}>
                        <div className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform
                         duration-300 ${isOn ? "translate-x-6" : "translate-x-0"}`}>
                        </div>
                    </button>

                </div>
                <div>DOB:{user.birth}</div>
            </div>
        </div>
    )
}

export default ContactCard
