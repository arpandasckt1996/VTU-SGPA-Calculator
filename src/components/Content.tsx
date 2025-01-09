import React from 'react';

const Content = () => {
  return (
    <section id="content" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">SGPA and CGPA Calculation Guide</h2>
        <div className="space-y-6 text-gray-700">
          {/* Introduction Section */}
          <section>
            <p>
              In academics, understanding your performance is essential, and SGPA (Semester Grade Point Average) plays a crucial role in evaluating your success. Whether you're a student in universities like VTU, KTU, or SRM, or preparing to calculate CGPA from SGPA, this guide covers everything you need to know.
            </p>
          </section>

          {/* What is SGPA */}
          <section>
            <h2 className="text-2xl font-semibold mt-8">What is SGPA?</h2>
            <p>
              SGPA (Semester Grade Point Average) is the weighted average of grade points earned in all courses during a semester. It reflects your academic performance and is a step towards calculating your CGPA (Cumulative Grade Point Average).
            </p>
          </section>

          {/* How to Calculate SGPA */}
          <section>
            <h2 className="text-2xl font-semibold mt-8">How to Calculate SGPA</h2>
            <p>To calculate SGPA:</p>
            <ol className="list-decimal list-inside space-y-2">
              <li><strong>Multiply the Grade Points:</strong> For each subject, multiply the grade earned with the respective credit hours.</li>
              <li><strong>Add the Total Grade Points:</strong> Sum up all the weighted grade points.</li>
              <li><strong>Divide by Total Credits:</strong> Divide the total grade points by the sum of all credit hours.</li>
            </ol>
            <div className="bg-gray-100 p-4 rounded-md mt-4">
              <p className="font-semibold text-gray-900">Formula:</p>
              <code className="block bg-white p-2 rounded-md border border-gray-300">
                SGPA = Total Grade Points / Total Credits
              </code>
            </div>
          </section>

          {/* How to Calculate CGPA */}
          <section>
            <h2 className="text-2xl font-semibold mt-8">How to Calculate CGPA from SGPA</h2>
            <p>
              CGPA (Cumulative Grade Point Average) represents the overall academic performance across semesters. Use the following steps:
            </p>
            <ol className="list-decimal list-inside space-y-2">
              <li>Add the SGPAs of all semesters.</li>
              <li>Divide the sum by the number of semesters.</li>
            </ol>
            <div className="bg-gray-100 p-4 rounded-md mt-4">
              <p className="font-semibold text-gray-900">Example:</p>
              <code className="block bg-white p-2 rounded-md border border-gray-300">
                CGPA = (8.2 + 7.8 + 8.5) / 3 = 8.17
              </code>
            </div>
          </section>

          {/* SGPA to Percentage Conversion */}
          <section>
            <h2 className="text-2xl font-semibold mt-8">SGPA to Percentage Conversion</h2>
            <p>
              To convert SGPA into percentage, most universities follow this formula:
            </p>
            <div className="bg-gray-100 p-4 rounded-md mt-4">
              <p className="font-semibold text-gray-900">Formula:</p>
              <code className="block bg-white p-2 rounded-md border border-gray-300">
                Percentage = (SGPA × 10) − 7.5
              </code>
            </div>
            <div className="bg-gray-100 p-4 rounded-md mt-4">
              <p className="font-semibold text-gray-900">Example:</p>
              <code className="block bg-white p-2 rounded-md border border-gray-300">
                If SGPA = 8.2:<br />
                Percentage = (8.2 × 10) − 7.5 = 74.5%
              </code>
            </div>
          </section>

          {/* SGPA Calculators for Specific Universities */}
          <section>
            <h2 className="text-2xl font-semibold mt-8">SGPA Calculators for Specific Universities</h2>
            <ol className="list-decimal list-inside space-y-4">
              <li>
                <strong>VTU SGPA Calculator:</strong>
                <p>Tailored for Visvesvaraya Technological University students. Converts SGPA to CGPA and percentage for VTU grading systems.</p>
              </li>
              <li>
                <strong>KTU SGPA Calculator:</strong>
                <p>Designed for APJ Abdul Kalam Technological University. Includes online tools to simplify calculations.</p>
              </li>
              <li>
                <strong>SRM SGPA Calculator:</strong>
                <p>For SRM Institute of Science and Technology, offering semester-specific SGPA conversion.</p>
              </li>
            </ol>
          </section>

          {/* YouTube Video */}
          <div className="flex justify-center items-center mt-8">
            <div className="w-full max-w-3xl" style={{ height: '400px' }}>
              <iframe
                src="https://www.youtube.com/embed/9R-tmLqDV1s"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-md border border-gray-300 shadow-md"
              ></iframe>
            </div>
          </div>

          {/* How It Works and Features */}
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">How It Works</h3>
              <p>
                Simply input your subject codes, names, credits, and grades. The calculator will instantly compute your SGPA using VTU's official formula.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Features</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Instant SGPA calculation</li>
                <li>Support for all VTU schemes</li>
                <li>PDF export functionality</li>
                <li>Easy sharing options</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  
  );
};

export default Content;