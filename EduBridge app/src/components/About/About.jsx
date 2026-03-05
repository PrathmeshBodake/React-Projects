export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img
              className="rounded-2xl"
              src="https://media.istockphoto.com/id/2260770703/photo/young-man-explaining-programming-concepts-to-young-black-man.webp?a=1&b=1&s=612x612&w=0&k=20&c=HWwEAUit9QlxLgAdzR8oMI5XqfHcjEKwMd37cW6fgjo="
              alt="image"
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              Programming knowledge grows faster with the right learning
              platform
            </h2>

            <p className="mt-6 text-gray-600">
              Our coding app is designed to help students and developers learn
              programming in a simple and practical way. It provides structured
              learning paths, real coding examples, and hands-on practice so
              users can understand concepts clearly and improve their
              problem-solving skills.
            </p>

            <p className="mt-4 text-gray-600">
              Whether you are a beginner starting with basic programming or an
              experienced developer exploring advanced technologies, the
              platform offers tutorials, exercises, and projects that make
              learning coding more interactive and effective.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
