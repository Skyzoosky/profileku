export default function Tech() {
    return (
        <div id="tech" className="bg-white min-h-screen  text-black">
            <div className="flex justify-center items-center">
                <div className="border w-[500px] h-[580px] rounded-lg">
                    <h1 className="flex justify-center items-center text-2xl font-bold mt-20">Technology</h1>
                    <div className="flex justify-center items-center mt-20">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <img src="react.png" className="h-32" />
                            </div>
                            <div>
                                <img src="lara.png" className="h-32" />
                            </div>
                            <div>
                                <img src="nodejs.png" className="h-32" />
                            </div>
                            <div>
                                <img src="mysql.png" className="h-32" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
