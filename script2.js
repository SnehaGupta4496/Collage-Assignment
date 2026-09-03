document.write(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CST Department - IIEST Shibpur</title>
    <link rel="stylesheet" href="style2.css">
</head>

<body>

<header class="header">
    <div class="container">
        <h1>Indian Institute of Engineering Science and Technology</h1>
        <p>Shibpur</p>
        <h2>Department of Computer Science and Technology</h2>
    </div>
</header>

<nav class="navbar">
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#programs">Programs</a>
    <a href="#research">Research</a>
    <a href="#faculty">Faculty</a>
</nav>

<section id="home" class="hero">
    <div class="container">
        <h1>Computer Science and Technology</h1>
        <p>Explore the Department of Computer Science and Technology at IIEST Shibpur.</p>

        <div class="print-container">
            <button onclick="window.print()">Print This Page</button>
        </div>
    </div>
</section>

<section id="about" class="section">
    <div class="container">
        <h2>About the Department</h2>
        <p>
            The Department of Computer Science and Technology at IIEST Shibpur
            provides quality education and research opportunities in various
            areas of computer science and information technology.
        </p>

        <p>
            The department focuses on developing strong technical knowledge,
            problem-solving skills and research capabilities among students.
        </p>
    </div>
</section>

<section id="programs" class="section alternate">
    <div class="container">
        <h2>Academic Programs</h2>

        <div class="cards">
            <div class="card">
                <h3>B.Tech</h3>
                <p>Undergraduate program in Computer Science and Technology.</p>
            </div>

            <div class="card">
                <h3>M.Tech</h3>
                <p>Postgraduate program with advanced technical specialization.</p>
            </div>

            <div class="card">
                <h3>Ph.D.</h3>
                <p>Research-oriented doctoral program in Computer Science and Technology.</p>
            </div>
        </div>
    </div>
</section>

<section id="research" class="section">
    <div class="container">
        <h2>Research Areas</h2>

        <div class="research-list">
            <div>Artificial Intelligence</div>
            <div>Machine Learning</div>
            <div>Data Mining</div>
            <div>Computer Networks</div>
            <div>Image Processing</div>
            <div>Cyber Security</div>
            <div>Cloud Computing</div>
            <div>Software Engineering</div>
        </div>
    </div>
</section>

<section id="faculty" class="section alternate">
    <div class="container">
        <h2>Faculty Members</h2>

        <div class="faculty-grid">

            <div class="faculty-card">
                <h3>Dr. Jaya Sil</h3>
                <p>Professor</p>
                <p>Artificial Intelligence and Machine Learning</p>
            </div>

            <div class="faculty-card">
                <h3>Dr. Susanta Chakraborty</h3>
                <p>Professor</p>
                <p>Computer Networks and Security</p>
            </div>

            <div class="faculty-card">
                <h3>Dr. Surajeet Ghosh</h3>
                <p>Professor and Head</p>
                <p>Computer Science and Technology</p>
            </div>

            <div class="faculty-card">
                <h3>Dr. Sipra Das Bit</h3>
                <p>Professor</p>
                <p>Computer Networks and Distributed Systems</p>
            </div>

        </div>
    </div>
</section>

<footer class="footer">
    <p>Department of Computer Science and Technology</p>
    <p>IIEST Shibpur</p>
</footer>

</body>
</html>
`);