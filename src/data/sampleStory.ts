// The Mitchell Family Letters — 1940s-1960s correspondence
// A fictional but emotionally resonant sample family for demos

export interface Entity {
  id: string;
  name: string;
  type: "person" | "place" | "date" | "theme";
  description: string;
  firstMention: string; // source document ID
  mentions: number;
}

export interface SourceDocument {
  id: string;
  type: "letter" | "photo" | "document";
  title: string;
  date: string;
  from?: string;
  to?: string;
  thumbnail?: string;
  transcription: string;
  confidence: number;
  whatWeLearned: string;
  entities: string[]; // entity IDs
}

export interface StoryBlock {
  id: string;
  type: "prose" | "source-embed" | "photo" | "timeline-marker" | "chapter-heading";
  content: string;
  sourceDocId?: string;
  caption?: string;
}

export interface Story {
  id: string;
  title: string;
  subtitle: string;
  author: string;
  lastUpdated: string;
  blocks: StoryBlock[];
}

// --- Entities ---

export const entities: Entity[] = [
  {
    id: "e1",
    name: "Eleanor Mitchell",
    type: "person",
    description: "Family matriarch. Stayed in Cedar Falls while James served. Wrote every Sunday.",
    firstMention: "sd1",
    mentions: 47,
  },
  {
    id: "e2",
    name: "James Mitchell",
    type: "person",
    description: "Eleanor's husband. Served at Camp Pendleton 1943-1945. Returned to the farm, later moved the family to Chicago.",
    firstMention: "sd1",
    mentions: 42,
  },
  {
    id: "e3",
    name: "Ruth Mitchell",
    type: "person",
    description: "Eldest daughter. Born 1940. Kept every letter. The reason this archive exists.",
    firstMention: "sd2",
    mentions: 28,
  },
  {
    id: "e4",
    name: "Henry Mitchell",
    type: "person",
    description: "Son. Born 1946 — the first post-war baby. James called him 'the peace dividend.'",
    firstMention: "sd5",
    mentions: 19,
  },
  {
    id: "e5",
    name: "Aunt Clara",
    type: "person",
    description: "Eleanor's sister. Lived in Chicago. Helped the family transition when they moved from the farm.",
    firstMention: "sd3",
    mentions: 15,
  },
  {
    id: "e6",
    name: "Cedar Falls, Iowa",
    type: "place",
    description: "Where the Mitchell farm was. Where Eleanor raised the children during the war. Where the letters were written.",
    firstMention: "sd1",
    mentions: 34,
  },
  {
    id: "e7",
    name: "Camp Pendleton",
    type: "place",
    description: "Where James was stationed. Marine Corps base in California.",
    firstMention: "sd1",
    mentions: 12,
  },
  {
    id: "e8",
    name: "Chicago",
    type: "place",
    description: "Where the family moved in 1952. Aunt Clara's city. The new chapter.",
    firstMention: "sd3",
    mentions: 21,
  },
  {
    id: "e9",
    name: "The Farm",
    type: "theme",
    description: "The Mitchell family farm in Cedar Falls. Central to Eleanor's identity. Letting go of it was the hardest decision.",
    firstMention: "sd1",
    mentions: 29,
  },
  {
    id: "e10",
    name: "Sunday Letters",
    type: "theme",
    description: "Eleanor wrote every Sunday without fail. Even after James returned. It became her way of processing life.",
    firstMention: "sd1",
    mentions: 18,
  },
];

// --- Source Documents ---

export const sourceDocuments: SourceDocument[] = [
  {
    id: "sd1",
    type: "letter",
    title: "Eleanor to James — First Letter",
    date: "1943-09-14",
    from: "Eleanor Mitchell",
    to: "James Mitchell",
    transcription: `My dearest James,

The house is too quiet without you. Ruth asked again today when you're coming home and I told her what I always tell her — soon. I don't know if that's true but it's what she needs to hear.

The corn is coming in well. Mr. Hendricks helped with the east field like he promised. I don't love owing favors but I love losing the crop less.

I'll write every Sunday. You can count on that like the seasons.

All my love,
Eleanor`,
    confidence: 0.94,
    whatWeLearned: "Establishes Eleanor's voice — pragmatic, warm, devoted. Confirms James stationed away (likely military). Ruth is old enough to ask questions (est. 3-4 years old). The farm is central. Sunday letters tradition begins.",
    entities: ["e1", "e2", "e3", "e6", "e7", "e9", "e10"],
  },
  {
    id: "sd2",
    type: "letter",
    title: "Eleanor to James — Ruth's First Day of School",
    date: "1944-09-05",
    from: "Eleanor Mitchell",
    to: "James Mitchell",
    transcription: `James,

Ruth started school today. She wore the blue dress your mother sent and looked like a painting walking down that road. I wanted to cry but I didn't because she was watching me to see if she should be scared.

She came home with a drawing of our family. You're in it. She drew you bigger than the house.

I'm saving it for you.

Your Eleanor`,
    confidence: 0.91,
    whatWeLearned: "Ruth starting school — confirms birth around 1940. Eleanor's emotional restraint for Ruth's sake. James's mother is alive and in contact. Ruth's drawing suggests strong bond with absent father.",
    entities: ["e1", "e2", "e3", "e6"],
  },
  {
    id: "sd3",
    type: "letter",
    title: "Eleanor to Aunt Clara — Considering Chicago",
    date: "1951-03-22",
    from: "Eleanor Mitchell",
    to: "Aunt Clara",
    transcription: `Dear Clara,

James has been talking about Chicago again. He says the farm isn't what it was and maybe he's right. The prices are bad and getting worse and Henry needs things we can't get out here.

But this is where I learned to be myself, Clara. This kitchen, this porch, these fields. How do you pack that?

I suppose you'd tell me I'm being dramatic. You'd be right.

Tell me about the schools there. That's where I'll start deciding.

Love,
Eleanor`,
    confidence: 0.89,
    whatWeLearned: "First mention of potential move to Chicago. Economic pressure on the farm. Henry (born ~1946) has needs — possibly medical or educational. Eleanor's deep attachment to the farm. Clara is the Chicago connection.",
    entities: ["e1", "e2", "e4", "e5", "e6", "e8", "e9"],
  },
  {
    id: "sd4",
    type: "photo",
    title: "The Mitchell Family — Cedar Falls Porch",
    date: "1950-07-04",
    transcription: "Family photograph on the front porch of the Cedar Falls farmhouse. Eleanor (seated, center), James (standing, behind), Ruth (age ~10, left), Henry (age ~4, on Eleanor's lap). American flag visible on porch rail. Summer, likely July 4th based on date notation on reverse.",
    confidence: 0.97,
    whatWeLearned: "Visual confirmation of family composition. The farmhouse porch matches Eleanor's descriptions. James appears healthy post-war. First visual of all four Mitchells together.",
    entities: ["e1", "e2", "e3", "e4", "e6", "e9"],
  },
  {
    id: "sd5",
    type: "letter",
    title: "Eleanor to Ruth — After the Move",
    date: "1952-11-08",
    from: "Eleanor Mitchell",
    to: "Ruth Mitchell",
    transcription: `Ruthie,

I know the apartment feels small. I know you miss your room and the yard and I know you think I don't understand but I do. I miss it more than you know.

But your father is happier than I've seen him since before the war. Henry is thriving at the new school. And your Aunt Clara is teaching me to navigate the L, which is an adventure I did not expect at my age.

Chicago is loud and fast and strange but it's growing on me. Like a song you don't like at first but can't stop humming.

Give it a season, sweetheart. That's all I ask.

Love,
Mom`,
    confidence: 0.93,
    whatWeLearned: "The move to Chicago happened. Ruth is struggling with the transition (she'd be ~12). Eleanor is adapting but grieving the farm. James is doing better in Chicago — suggests the farm was hard on him post-war. Henry thriving confirms the move was partly for him. Eleanor's voice is maturing — more reflective, more metaphorical.",
    entities: ["e1", "e2", "e3", "e4", "e5", "e6", "e8", "e9"],
  },
];

// --- The Story ---

export const mitchellStory: Story = {
  id: "mitchell-family",
  title: "The Sunday Letters",
  subtitle: "A family told through the letters Eleanor Mitchell never stopped writing",
  author: "Ruth Mitchell (with Kindred AI)",
  lastUpdated: "2026-03-08",
  blocks: [
    {
      id: "b1",
      type: "chapter-heading",
      content: "The War Years",
    },
    {
      id: "b2",
      type: "prose",
      content: "Eleanor Mitchell wrote her first letter to James on a Sunday in September 1943. She would write every Sunday for the next twenty-three years — through the war, through the silence of his return, through the selling of the farm, through the noise of Chicago, through Ruth's wedding and Henry's graduation and all the ordinary Sundays that make up a life.",
    },
    {
      id: "b3",
      type: "prose",
      content: "That first letter is spare and practical, like Eleanor herself. The corn is coming in. A neighbor is helping with the fields. Ruth wants to know when her father is coming home. But between the lines, if you know how to read them, there's a woman learning to hold everything together by the act of writing it down.",
    },
    {
      id: "b4",
      type: "source-embed",
      content: "",
      sourceDocId: "sd1",
      caption: "Eleanor's first Sunday letter — September 14, 1943",
    },
    {
      id: "b5",
      type: "prose",
      content: "A year later, Ruth started school. Eleanor's letter that day is one of the most beautiful in the collection — a mother watching her daughter walk down a dirt road in a blue dress, wanting to cry but holding steady because Ruth was watching to see if she should be scared.",
    },
    {
      id: "b6",
      type: "source-embed",
      content: "",
      sourceDocId: "sd2",
      caption: "Ruth's first day of school — the drawing of the family where James is bigger than the house",
    },
    {
      id: "b7",
      type: "prose",
      content: "Ruth drew her father bigger than the house. Eleanor saved that drawing. Sixty years later, it was in the same box as the letters, pressed flat between two envelopes like a leaf someone wanted to keep forever.",
    },
    {
      id: "b8",
      type: "chapter-heading",
      content: "The Decision",
    },
    {
      id: "b9",
      type: "prose",
      content: "James came home from the war quieter than he left. The farm that had sustained Eleanor through his absence became, for him, a reminder of everything that had changed. By 1951, he was talking about Chicago.",
    },
    {
      id: "b10",
      type: "prose",
      content: "Eleanor wrote to her sister Clara — the only person she could be fully honest with — about the possibility of leaving. The letter is extraordinary: a woman negotiating between the place that made her and the future her family needed. 'How do you pack that?' she asks, meaning not the dishes or the furniture but the self she'd built in that kitchen, on that porch, in those fields.",
    },
    {
      id: "b11",
      type: "source-embed",
      content: "",
      sourceDocId: "sd3",
      caption: "Eleanor to Clara — 'How do you pack that?'",
    },
    {
      id: "b12",
      type: "timeline-marker",
      content: "Summer 1950 — The last July 4th on the farm",
    },
    {
      id: "b13",
      type: "source-embed",
      content: "",
      sourceDocId: "sd4",
      caption: "The Mitchell family on the Cedar Falls porch, July 4th, 1950",
    },
    {
      id: "b14",
      type: "prose",
      content: "There's a photograph from that last summer on the farm — July 4th, 1950. Eleanor is seated in the center, James standing behind her, Ruth on the left looking older than ten, Henry on Eleanor's lap looking at something beyond the camera. An American flag hangs from the porch rail. Everyone is smiling, but Eleanor's smile is the one that tells you she already knows this is ending.",
    },
    {
      id: "b15",
      type: "chapter-heading",
      content: "Chicago",
    },
    {
      id: "b16",
      type: "prose",
      content: "They moved in the fall of 1952. Ruth was twelve and furious. Eleanor wrote her a letter — not a Sunday letter to James, but a different kind of letter, the kind a mother writes when she needs her daughter to understand something she can barely understand herself.",
    },
    {
      id: "b17",
      type: "source-embed",
      content: "",
      sourceDocId: "sd5",
      caption: "Eleanor to Ruth — 'Give it a season, sweetheart'",
    },
    {
      id: "b18",
      type: "prose",
      content: "'Chicago is loud and fast and strange but it's growing on me. Like a song you don't like at first but can't stop humming.' That line — that's Eleanor at her best. Practical metaphor. No self-pity. Just the quiet insistence that change doesn't have to mean loss.",
    },
    {
      id: "b19",
      type: "prose",
      content: "Ruth kept that letter. She kept all of them. Sixty years later, when her own children asked about the family, she opened a box in the attic and said, 'It's all here. Your grandmother wrote it all down.'",
    },
    {
      id: "b20",
      type: "prose",
      content: "And she had. Every Sunday. Without fail.",
    },
  ],
};

// --- Timeline ---

export interface TimelineEvent {
  date: string;
  label: string;
  description: string;
  sourceDocIds: string[];
}

export const timeline: TimelineEvent[] = [
  {
    date: "1943-09",
    label: "James deploys",
    description: "James Mitchell reports to Camp Pendleton. Eleanor begins the Sunday letters.",
    sourceDocIds: ["sd1"],
  },
  {
    date: "1944-09",
    label: "Ruth starts school",
    description: "Ruth's first day of school. The blue dress. The drawing where James is bigger than the house.",
    sourceDocIds: ["sd2"],
  },
  {
    date: "1945-08",
    label: "James returns",
    description: "James comes home from the war. Quieter than he left.",
    sourceDocIds: [],
  },
  {
    date: "1946-03",
    label: "Henry is born",
    description: "Henry Mitchell — James calls him 'the peace dividend.'",
    sourceDocIds: [],
  },
  {
    date: "1950-07",
    label: "Last summer on the farm",
    description: "The July 4th photograph. The family on the porch.",
    sourceDocIds: ["sd4"],
  },
  {
    date: "1951-03",
    label: "Eleanor considers Chicago",
    description: "'How do you pack that?' Eleanor writes to Clara about leaving the farm.",
    sourceDocIds: ["sd3"],
  },
  {
    date: "1952-10",
    label: "The move to Chicago",
    description: "The Mitchell family leaves Cedar Falls for Chicago. Ruth is twelve and furious.",
    sourceDocIds: ["sd5"],
  },
];
