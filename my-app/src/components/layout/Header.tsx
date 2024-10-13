import React from "react"
const Header = () => {
    return (
        <header className="flex justify-between max-w-screen-xl mx-auto bg-white py-6 px-2 sticky top-0">
            <div>
                <h2 className="text-xl font-bold">Panaverse Dao</h2>
            </div>
            {/* navigation bar */}
                <ul className="flex space-x- font-semibold">
                    <li>Home</li>
                    <li>Courses</li>
                </ul>
        </header>
  )
}

export default Header
