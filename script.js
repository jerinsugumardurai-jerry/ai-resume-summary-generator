function generateSummary() {

    let job = document.getElementById("jobInput").value;
    let result = document.getElementById("resultBox");

    if(job.trim() === "") {
        alert("Please enter your job title");
        return;
    }

    let summaries = [

`Results-driven ${job} with extensive experience in strategy development and performance execution.
Proven ability to analyze business challenges and implement innovative solutions that drive measurable growth.
Strong collaborator who works effectively with cross-functional teams to deliver high-impact results.
Committed to continuous improvement and operational excellence.`,

`Highly motivated ${job} with a solid track record of delivering value through structured planning and execution.
Skilled in identifying opportunities for optimization and translating insights into actionable strategies.
Demonstrates leadership qualities with a focus on accountability and measurable outcomes.
Passionate about contributing to long-term organizational success.`,

`Dynamic ${job} recognized for strong analytical thinking and results-oriented performance.
Experienced in managing complex projects while maintaining quality and efficiency standards.
Adept at adapting to evolving business environments and delivering under pressure.
Focused on driving innovation and sustainable growth initiatives.`,

`Performance-focused ${job} with deep understanding of operational processes and strategic alignment.
Brings hands-on expertise in execution, monitoring, and continuous improvement frameworks.
Strong communicator with the ability to align teams toward common objectives.
Dedicated to delivering consistent and scalable business results.`,

`Innovative ${job} with experience in designing and implementing data-driven solutions.
Skilled in leveraging industry best practices to improve performance metrics and productivity.
Collaborates effectively to enhance workflow efficiency and team synergy.
Committed to excellence and measurable impact.`,

`Detail-oriented ${job} with proven ability to manage responsibilities with precision and accountability.
Excels in problem-solving and delivering strategic insights that influence decision-making.
Demonstrates adaptability in fast-paced environments while maintaining high standards.
Focused on achieving organizational goals with efficiency and professionalism.`,

`Experienced ${job} with strong background in execution, planning, and performance evaluation.
Known for delivering results through strategic thinking and structured implementation.
Builds productive relationships that foster collaboration and innovation.
Driven to contribute meaningful value to progressive organizations.`,

`Strategic ${job} with expertise in performance optimization and workflow enhancement.
Brings analytical skills combined with creative problem-solving capabilities.
Consistently delivers measurable results aligned with business objectives.
Dedicated to advancing operational effectiveness and growth.`,

`Results-oriented ${job} with ability to translate complex challenges into actionable strategies.
Strong experience in stakeholder coordination and execution excellence.
Maintains focus on efficiency, quality, and measurable performance outcomes.
Committed to driving sustainable development initiatives.`,

`Forward-thinking ${job} with experience in process improvement and business transformation.
Skilled in leveraging tools and methodologies to enhance productivity.
Collaborates effectively to ensure alignment across departments.
Passionate about innovation and long-term strategic impact.`,

`Dedicated ${job} with comprehensive understanding of industry standards and operational frameworks.
Proven track record of executing projects that exceed expectations.
Strong decision-making ability supported by analytical evaluation.
Committed to delivering excellence in every initiative undertaken.`,

`Growth-driven ${job} with expertise in identifying expansion opportunities and optimizing systems.
Demonstrates strong leadership in driving cross-functional collaboration.
Capable of managing multiple priorities with focus and discipline.
Focused on achieving high-impact organizational outcomes.`,

`Versatile ${job} bringing adaptability and strong execution skills to dynamic environments.
Experienced in performance tracking and continuous process refinement.
Maintains proactive communication and team engagement practices.
Driven by measurable success and professional excellence.`,

`Analytical ${job} with expertise in evaluating data to inform strategic decisions.
Strong ability to improve efficiency through structured planning.
Builds collaborative environments that support innovation.
Committed to delivering impactful and scalable results.`,

`Professional ${job} with experience in optimizing business operations and driving efficiency.
Demonstrates excellent coordination skills across diverse teams.
Focused on delivering consistent performance improvements.
Dedicated to creating long-term organizational value.`,

`Impact-driven ${job} with proven experience in executing high-performance strategies.
Skilled at transforming objectives into practical action plans.
Maintains high standards of quality and accountability.
Eager to contribute expertise toward organizational growth.`,

`Proactive ${job} with experience in strategic execution and operational excellence.
Recognized for problem-solving capabilities and adaptive thinking.
Ensures alignment between performance metrics and business goals.
Passionate about delivering measurable and sustainable impact.`,

`Resourceful ${job} with strong ability to manage projects and deliver measurable success.
Demonstrates clarity in communication and execution planning.
Excels in building efficient systems that improve outcomes.
Focused on advancing professional and organizational growth.`,

`Committed ${job} with expertise in driving structured implementation and innovation.
Strong collaborator with emphasis on teamwork and results.
Skilled in identifying performance gaps and closing them effectively.
Dedicated to achieving excellence in every responsibility.`,

`Vision-oriented ${job} with experience in aligning operational strategies with long-term goals.
Brings a balance of analytical precision and creative execution.
Maintains focus on quality delivery and stakeholder satisfaction.
Ready to contribute meaningful expertise to forward-looking organizations.`

    ];

    let randomIndex = Math.floor(Math.random() * summaries.length);

    result.value = summaries[randomIndex];
}