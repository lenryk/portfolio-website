import Heading from "@/components/Heading";
import Button from "@/components/Button";

export default function Home() {
  return (
    <section
      className="flex h-full flex-col items-center
    justify-center gap-24 p-5 lg:flex-row lg:gap-5 lg:p-7"
    >
      <div className="flex flex-col gap-8 sm:gap-20">
        <div>
          <Heading size="h1">Sam Carr</Heading>
          <Heading
            size="h2"
            className="pt-2 text-secondary-indigo"
          >{`> Fullstack developer`}</Heading>
        </div>
        <div className="text-secondary-lynch">
          <p>// welcome to my portfolio website</p>
          <p>// be sure to checkout out my projects</p>
          <p>// contact me if you have any questions</p>
          <div className="flex gap-4">
            <Button className="mt-4" as="link" href="/projects">
              view projects
            </Button>
            <Button
              preset="primary"
              className="mt-4"
              as="link"
              href="/sam-carr-cv.pdf"
            >
              download CV
            </Button>
          </div>
        </div>
      </div>
      <div
        className="portrait-text portrait hidden
      h-[510px] w-[510px] text-center duration-150 lg:block"
      >
        Once upon a time, in a picturesque town nestled amidst rolling hills,
        lived a young and inquisitive boy named Sam. From an early age, Sam
        displayed an insatiable appetite for technology and possessed a keen eye
        for design. While other children frolicked outside, Sam would spend
        hours hunched over his computer, exploring the vast and captivating
        digital realm. Sam's foray into the enchanting world of frontend
        development commenced with a simple curiosity about the mechanics behind
        websites. Fueled by determination and an unwavering enthusiasm, he
        delved headlong into the realm of HTML, CSS, and JavaScript. The more he
        learned, the more he realized the immense power that lay at his
        fingertips. With each line of code Sam meticulously typed, an
        electrifying surge of excitement coursed through his veins. It felt as
        if he were an artist, painting intricate masterpieces with the stroke of
        a pixelated brush. He marveled at how a few carefully placed tags could
        breathe life into content, and how cascading styles could metamorphose a
        dull web page into an animated and vibrant wonderland. As Sam honed his
        skills, he discovered the joy of bringing his own ideas to life.
        Countless nights were spent tirelessly working on personal projects, as
        he poured his heart and soul into every minute detail. Through the highs
        of success and the lows of failure, Sam matured both as a developer and
        an artist, sculpting his own unique digital identity. One auspicious
        day, Sam happened upon a local web design agency that emanated an aura
        of bustling creativity. It was a veritable hive of like-minded
        individuals who shared his passion for crafting unparalleled digital
        experiences. Filled with a mix of trepidation and excitement, he
        summoned the courage to step through the agency's welcoming doors, armed
        with a portfolio brimming with his creative prowess and an unyielding
        sense of determination. To his immense surprise, the agency recognized
        Sam's potential and swiftly extended an internship offer. Overwhelmed
        with gratitude and a zest for seizing the opportunity of a lifetime, Sam
        eagerly accepted. From the very first day, he delved headfirst into
        myriad projects, immersing himself in an ocean of knowledge.
        Collaborating alongside experienced designers and developers, Sam
        gleaned invaluable insights from their expertise while concurrently
        imbuing each project with his distinctive creative flair. However, Sam's
        journey as a budding frontend developer was not devoid of challenges. He
        encountered a plethora of perplexing bugs, wrestled with the
        labyrinthine labyrinth that was cross-browser compatibility, and often
        found himself burning the midnight oil in pursuit of resolving elusive
        issues. Nevertheless, he staunchly refused to allow these setbacks to
        dissuade him. Instead, Sam embraced each tribulation as an opportunity
        for growth and learning. He sought solace in the supportive community of
        fellow developers, who were always willing to lend a helping hand or
        proffer sagacious advice. As the sands of time continued their
        relentless march, Sam's skills flourished, and his ardor for frontend
        development burned brighter than ever before. He adeptly crafted
        awe-inspiring websites, constantly pushing the boundaries of what could
        be achieved with code. His designs were intuitive, his animations
        seamless, and his attention to detail unparalleled. Sam had indisputably
        found his calling. One serendipitous day, as Sam sat at his desk,
        engrossed in a complex project, he was struck by a profound realization:
        he had metamorphosed from a precocious young boy, brimming with
        curiosity and dreams, into a consummate frontend developer. The journey
        had been arduous, fraught with challenges, yet profoundly rewarding.
        With this newfound awareness, Sam recognized the immense power he
        held—the power to create immersive experiences that would resonate
        deeply within people's lives. He could fashion websites that fostered
        connection, applications that simplified the mundanities of everyday
        life, and interfaces that kindled genuine joy. Each project presented an
        opportunity to leave an indelible imprint upon the digital tapestry and
        elicit positive change. Armed with an unwavering sense of purpose, Sam
        continued to refine his craft, ever eager to embrace new challenges and
        transcend his own limitations. He understood that the world of frontend
        development was a constantly evolving landscape, demanding perpetual
        learning and growth. Yet, rather than being daunted by this reality, Sam
        embraced it wholeheartedly, knowing that within these ever-shifting
        paradigms lay the seeds of innovation and the catalysts for his
        boundless creativity. And thus, Sam's story as a frontend developer
        began to unfurl, characterized by moments of frustration, triumph, and
        an endless stream of inspiration. He had discovered his passion—the
        fusion of artistry and technicality—and was resolute in his commitment
        to forge a lasting impact through his skills and boundless creativity.
        Armed with his trusty keyboard and a heart brimming with excitement, he
        embarked upon an enduring odyssey, poised to shape the digital landscape
        one line of code at a time. With each passing project, Sam's confidence
        soared, fueled by the successes he achieved and the positive feedback he
        received. However, he understood that his journey as a frontend
        developer was far from over. He craved mastery, desiring to refine his
        skills and expand his knowledge to new heights. To embark on this quest,
        Sam sought out online communities and forums where like-minded
        developers gathered. He engaged in spirited discussions, eagerly sharing
        his insights and absorbing the wisdom of those who had traveled the path
        before him. Through collaborative projects and code reviews, he gained
        invaluable feedback that helped him hone his craft. Sam also sought out
        mentors—experienced frontend developers who could guide him along his
        journey. With their guidance, he delved deeper into the intricacies of
        JavaScript frameworks, such as React and Vue.js. He experimented with
        new tools and techniques, pushing the boundaries of what he believed was
        possible. As his skills grew, Sam's passion for frontend development
        took on a new dimension. He saw the web as a canvas for creativity,
        where he could bring his wildest ideas to life. From interactive
        animations that dazzled the senses to immersive user experiences that
        captivated audiences, Sam's creations resonated deeply with those who
        encountered them. While Sam had grown immensely as an individual
        developer, he discovered that the true magic of frontend development lay
        in collaboration. He relished the opportunity to work alongside talented
        designers, backend developers, and other specialists, understanding that
        their collective efforts could achieve far more than any individual
        endeavor. In collaborative projects, Sam found himself engaged in lively
        discussions, brainstorming ideas that merged creativity with technical
        feasibility. He learned to empathize with designers, translating their
        visions into functional and visually stunning interfaces. He worked
        seamlessly with backend developers, ensuring smooth integration of
        frontend and backend systems. Through collaboration, Sam discovered the
        power of teamwork and the joy of creating something greater than the sum
        of its parts. Together, they crafted remarkable digital experiences that
        left lasting impressions on users. As Sam's career progressed, he
        realized that frontend development was not merely about building
        websites and applications. It was about leaving a lasting legacy—a
        digital footprint that would continue to impact users long after he had
        moved on to new endeavors. Sam immersed himself in the world of
        accessibility, learning how to create inclusive experiences that catered
        to all users, regardless of their abilities. He championed the cause of
        web standards, ensuring that his creations adhered to best practices and
        provided a seamless experience across different devices and platforms.
        In addition to his professional work, Sam actively contributed to the
        frontend development community. He shared his knowledge through blog
        posts, tutorials, and open-source projects. He mentored aspiring
        developers, helping them navigate the challenges of their own journeys.
        Sam understood that by uplifting others, he could help shape a vibrant
        and supportive community for future generations.
      </div>
    </section>
  );
}
