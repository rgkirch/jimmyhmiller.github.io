import {
  Heading,
  GlobalLayout,
  Title,
} from "../utils.js";


export default () => (
  <GlobalLayout>
    <Title text="Conceptual Engineering" />
    <p>
      Naming things is one of the hardest things to do in software. Why? Is it
      because all the names have been taken? Is it becasue we are trying to get
      at some essence that our words need to capture? (Like some sort of fantasy
      magic system.) Perhaps at times we feel both of these things. But I think
      that the difficulties we feel naming things stems from an unexpressed
      anxiety. Deep down we understand that naming is more than assigning a word
      to a value. When we are naming things, we aren't just deciding what
      something is, instead we are asking the question of what something should
      be.
    </p>
    <p>
      Taking this normative stance, this view that we aren't merely trying to
      explain concepts, but trying to ask the question of what our concepts
      ought to be, is called{" "}
      <a href="https://www.amazon.com/Fixing-Language-Essay-Conceptual-Engineering/dp/0198814712">
        Conceptual Engineering
      </a>
      . Conceptual Engineering here should be understood to include both working
      to change the meaning of existing concepts (re-engingeering) and creating
      new concepts for a given purpose (de novo engineering). Naming things is
      hard because in doing so, we know deep down that we are advocating for
      this concept. We are putting our weight behind this new concept, or in the
      redefinition (expansion or contraction) of an existing concept. This is a
      heavy burden to carry.
    </p>
    <Heading size="2" text="Carrying the Burden" />
    <p>
      Code we call over-abstracted has often failed us by not carrying this
      burden well. But sometimes, we are also asking too much of this code.
      Concepts extend past their concrete uses. Our concept of justice for
      instance extends not only to concrete instances that have occured, but to
      hypotheticals. So too the concepts in our programs extend beyond the ways
      in which we have in fact employed them. Expecting code to fully define a
      concept can lead to frustration. Instead we have to accept our sctive role
      in understanding a program.
    </p>
    <p>
      Given this underdetermination of code in defining the bounds of our
      concepts, what should we do? This depends on the circumstances we find
      ourselves in. Are we creators of these concepts, or consumers of them? As
      creators our work is by no means easy but straight forward. We are
      responsible for explaining our concept to others, for persuading others to
      adopt our approach, and to listen and consider feedback, refining our
      concepts as necessary. We are also responsible for considering if/when our
      concept has overstayed its welcome, when it is time to rid ourselves of
      this concept. In other words, we should take full responsibility for this
      concept.
    </p>
    <p>
      This notion of responsibility is incredibly important. Our concepts, if
      used, have effects on others. They can enable, or constrain, they can free
      or restrict, they can bring joy or pain. Responsibility here doesn't mean
      that all reactions people have towards our concepts are our fault. Perhaps
      people have taken our concepts and misused or abused them. But it does
      mean that we ought to consider closely the potential consequences of our
      ideas. It further suggests that we need to consider how we will receive
      feedback about the effects our concepts have had on others. Here it might
      be useful to think about the enterprise architect whose position is to
      make decisions around concepts for others, impose them, and yet never have
      to live with their effects.
    </p>
    <Heading size="3" text="Consuming Concepts" />
    <p>
      Being the consumer of a concept is often much harder than the creator. As
      creators we have certain leeway, we know the boundaries, we know where
      edges are vague and where they are exact. We are intimately familiar with
      our concepts. As consumers, we are not affording these luxuries. Instead
      we are encounting a concept and trying to employ it to meet our purposes,
      often not knowing if this is or isn't a good idea.
    </p>
    <p>
      Understanding of the norms of the person/community that has created this
      concept can be incredibly important for successful deployment. Does this
      concept have a canonical definition? Are there &quot;laws&quot; that apply
      the concept? What is the conceptual background from which this concept was
      born? Is there family of related concepts to which this concept belongs?
      These sorts of questions will helps us ensure we do not misuse the
      concept.
    </p>
    <p>
      Given all these constraints, how to precede is far from straight forward
      and often requires careful consideration and a good amount of taste. What
      do we do when we find a mismatch between our purpose and the current
      bounds of a concept? Should we choose some different existing concept,
      create a wholly new concept, work to extend the bounds of the concept, or
      change our purpose? Each of these responses (and more besides) can be the
      correct move to take. When the mismatch between our purposes and our
      candidate concept are serious and irreconcilable, it is often the correct
      course of action to search for a different existing concept. But knowing
      when something is irreconcilable is the trick.
    </p>
    <Heading size="4" text="Responding to Change" />
    <p>
      As for our other options, we have briefly discussed creating above so we
      won't add more here. That leaves expansion of the concept and revising of
      our purposes. Let's begin with the latter. Changing our purposes seems
      like a rather odd decision to make in light of finding a mismatch between
      our purposes and some existing concept. Yet, it can often be the right
      move if we realize that our purpose wasn't independently chosen, but was
      actually chosen in part because of our misunderstanding of the concept at
      hand. Imagine we are looking to change some software to meet a business
      need. We decide to split some part into two by applying a given existing
      concept in our codebase. So, our immediate purpose is to split something,
      that was unified, into two parts, but why did we choose to do this?
      Because of our understanding of the codebase, including our understanding
      of the concept. When we discover the mismatch, we ought to abandon our
      immediate purpose and keep in mind our ultimate purpose here, meeting the
      business need.
    </p>
    <p>
      This process of updating our purposes as our understanding of concepts
      expands is incredibly important. But so too, is it important to consider
      expansion of our concepts as our purposes change. Our concepts are
      under-determined by their instances, but more than that their boundaries
      are fuzzy in many dimensions. Over time we ought to reconsider these edges
      in light of our present purposes and knowledge. Introducing new concepts
      is an expensive task; expanding an existing one can be advantageous. When
      extending an existing concept, we can rely on existing ideas about the
      concept to help us transfer knowledge to our new extension making the
      learning curve much less steep. A fantastic example of this is the way in
      which video game level design can help us discover a new use for an old
      mechanic that we never had considered before.
    </p>
    <Heading size="2" text="Learning from Others" />
    <p>
      The framework here is rather abstract, and yet I doubt unfamiliar to
      programmers who have found themselves working in codebases developed by
      many people over a long period of time. A major part of programming is not
      just the writing of code, but the understanding, creating, and modifying
      of concepts. We often find ourselves frustrated in codebases where the
      various dimensions of concepts have not been properly attended to.
    </p>
    <p>
      There is more to be said about many of the things mentioned here. For
      example, how can we understand a concept by reading code and whatever
      documentation might exist when these things undetermined the concept at
      hand? How can understanding norms of a community or the intentions of an
      author help us here? How can we be sure we are doing justice to a concept
      in our extension of it? All of these questions and more deserve to be
      explored. The first step to doing so is to recognize Conceptual
      Engineering as a crucial part of what we do when engineering a codebase.
      Creating a codebase is not merely the creation of a bunch of textual
      artifacts. The norms and intentions we impose on this text is a crucial
      part of it. The concepts we create, reuse, or modify are incredibly
      important. If we want to be better programmers, we need to attend to our
      concepts and consider the question, what should this concept be.
    </p>
    <p>
      Most importantly though, we aren't in this alone. While our purposes may
      be particular to our craft, the process is not. We can learn from the
      philosophers who have explored{" "}
      <a href="https://www.amazon.com/Fixing-Language-Essay-Conceptual-Engineering/dp/0198814712">
        Conceptual Engineering
      </a>{" "}
      directly. But we can also share our own experiences, helping to bring our
      own perspective out into the broader world.
    </p>
  </GlobalLayout>
);