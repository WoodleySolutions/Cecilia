import { CurriculumData, ExerciseCategory, WeeklySchedule } from '../types';

export const curriculum: Record<string, CurriculumData> = {
  alexander: {
    name: "Alexander's Journey",
    weeks: [
      {
        week: 1,
        title: "Hand Position & Finger Numbers",
        goals: ["Learn proper sitting posture", "Identify fingers 1-5", "Place hands correctly on keys"],
        activities: [
          "Practice sitting at piano bench with feet flat",
          "Learn finger numbers (thumb=1, index=2, etc.)",
          "Find and play Middle C with thumb",
          "Play simple 5-finger patterns with right hand"
        ],
        catholicConnection: "Learn about how our hands are gifts from God, created to make beautiful music for His glory",
        leftHandFocus: "Gentle finger stretches and massage for 5 minutes daily"
      },
      {
        week: 2,
        title: "Note Reading - Treble Clef Basics",
        goals: ["Recognize treble clef", "Identify lines and spaces", "Read notes C-D-E"],
        activities: [
          "Draw treble clefs",
          "Learn 'Every Good Boy Does Fine' for lines",
          "Learn 'FACE' for spaces",
          "Play C-D-E with proper fingering"
        ],
        catholicConnection: "The staff represents the ladder to heaven - each note lifting our hearts closer to God",
        leftHandFocus: "Practice opening and closing left hand slowly, count to 10"
      },
      {
        week: 3,
        title: "Rhythm Foundations",
        goals: ["Understand whole, half, quarter notes", "Clap simple rhythms", "Count steady beats"],
        activities: [
          "Clap whole notes (4 beats)",
          "Clap half notes (2 beats)", 
          "Clap quarter notes (1 beat each)",
          "Play steady quarter notes on any key"
        ],
        catholicConnection: "Rhythm is like our heartbeat - God's gift of life beating within us",
        leftHandFocus: "Tap left hand fingers one at a time to a slow beat"
      },
      {
        week: 4,
        title: "Five-Finger Patterns",
        goals: ["Play C position (C-D-E-F-G)", "Use correct fingering", "Play hands separately"],
        activities: [
          "Find C position on piano",
          "Play C-D-E-F-G ascending with right hand",
          "Play G-F-E-D-C descending with right hand",
          "Simple melodies in C position"
        ],
        catholicConnection: "The five fingers remind us of the five wounds of Christ, each note a prayer of love",
        leftHandFocus: "Practice C position with left hand, very slowly, one note at a time"
      },
      {
        week: 5,
        title: "Introduction to Left Hand",
        goals: ["Find bass clef C position", "Play simple left hand patterns", "Begin coordination"],
        activities: [
          "Learn bass clef (different from treble)",
          "Find bass C with left thumb",
          "Play C-D-E with left hand (fingers 5-4-3)",
          "Alternate hands playing C"
        ],
        catholicConnection: "Left hand represents our humble service, supporting the melody like Mary supporting Jesus",
        leftHandFocus: "Strengthening exercises with therapy putty, 5 minutes daily"
      },
      {
        week: 6,
        title: "Simple Melodies",
        goals: ["Play first simple songs", "Read basic notation", "Express musicality"],
        activities: [
          "Learn 'Mary Had a Little Lamb'",
          "Practice dynamic contrast (loud/soft)",
          "Play with expression and feeling",
          "Memorize one simple song"
        ],
        catholicConnection: "Our first melodies honor Mary, the Mother of God, who sang the Magnificat",
        leftHandFocus: "Play simple bass notes while right hand plays melody"
      },
      {
        week: 7,
        title: "Catholic Hymn Introduction",
        goals: ["Learn part of a hymn", "Understand sacred music", "Connect faith and music"],
        activities: [
          "Learn simplified 'Amazing Grace' melody",
          "Practice 'Jesus Loves Me' in C position",
          "Discuss why we sing hymns in church",
          "Play during family prayer time"
        ],
        catholicConnection: "Hymns are prayers set to music - our voices joined with angels in praise",
        leftHandFocus: "Hold simple bass notes while singing hymn melodies"
      },
      {
        week: 8,
        title: "Review and Assessment",
        goals: ["Demonstrate all learned skills", "Play confidently", "Set goals for next phase"],
        activities: [
          "Performance for family",
          "Play all learned songs from memory",
          "Demonstrate proper posture and hand position",
          "Self-assess progress and challenges"
        ],
        catholicConnection: "Offering our musical gifts back to God, like the widow's mite",
        leftHandFocus: "Show progress in left hand strength and control"
      }
    ]
  },
  adrianna: {
    name: "Adrianna's Journey",
    weeks: [
      {
        week: 1,
        title: "Piano Discovery & Hand Position",
        goals: ["Explore piano sounds", "Learn finger numbers", "Proper sitting position"],
        activities: [
          "Explore high and low sounds on piano",
          "Learn finger numbers with silly songs",
          "Practice 'piano posture' like a princess",
          "Find Middle C and play it with different fingers"
        ],
        catholicConnection: "God made music to bring joy - explore all the beautiful sounds He created",
        ageAdaptation: "More visual learning, finger puppets for finger numbers, shorter lessons"
      },
      {
        week: 2,
        title: "Musical Alphabet & Staff",
        goals: ["Learn letters A-G", "Recognize treble clef", "Find notes on piano"],
        activities: [
          "Musical alphabet games and songs",
          "Draw treble clefs with fun decorations",
          "Find all the C's on the piano",
          "Color-coded staff worksheets"
        ],
        catholicConnection: "The musical alphabet is like God's language written in sound",
        ageAdaptation: "Use colors and games, make it playful and engaging"
      },
      {
        week: 3,
        title: "Rhythm and Beat",
        goals: ["Feel steady beat", "Clap simple patterns", "March to music"],
        activities: [
          "March around room to steady beat",
          "Clap to favorite songs",
          "Use rhythm sticks or shakers",
          "Body percussion games"
        ],
        catholicConnection: "Rhythm is like our prayers - steady, faithful, and from the heart",
        ageAdaptation: "Lots of movement and physical activity, keep it fun"
      },
      {
        week: 4,
        title: "Five-Finger Fun",
        goals: ["Play C-D-E-F-G pattern", "Use correct fingering", "Simple melodies"],
        activities: [
          "Rainbow C position (each finger a different color)",
          "Play 'walking up the hill' (ascending pattern)",
          "Play 'sliding down the hill' (descending)",
          "Make up simple melodies in C position"
        ],
        catholicConnection: "Five fingers like the five loaves - small gifts that God multiplies into beauty",
        ageAdaptation: "Use visual imagery and storytelling with the exercises"
      },
      {
        week: 5,
        title: "Left Hand Introduction",
        goals: ["Find bass clef position", "Play simple left hand notes", "Use both hands"],
        activities: [
          "Left hand is like the 'daddy' hand - strong and low",
          "Find bass C and play it proudly",
          "Take turns with hands playing notes",
          "Simple call and response between hands"
        ],
        catholicConnection: "Left hand represents St. Joseph - quiet, strong, and supportive",
        ageAdaptation: "Use family analogies and make it relatable"
      },
      {
        week: 6,
        title: "First Songs",
        goals: ["Play complete simple songs", "Sing while playing", "Perform for family"],
        activities: [
          "Learn 'Twinkle, Twinkle, Little Star'",
          "Practice singing while playing",
          "Decorate sheet music with stickers",
          "Mini recital for stuffed animals"
        ],
        catholicConnection: "First songs are like first prayers - simple but full of love",
        ageAdaptation: "Incorporate play and imagination, make performance fun"
      },
      {
        week: 7,
        title: "Catholic Songs",
        goals: ["Learn simple hymn", "Connect music to faith", "Play during prayer"],
        activities: [
          "Learn 'Jesus Loves Me' simplified version",
          "Practice 'This Little Light of Mine'",
          "Talk about singing in church",
          "Play quietly during bedtime prayers"
        ],
        catholicConnection: "Our songs become prayers that fly up to heaven like incense",
        ageAdaptation: "Focus on songs she already knows and loves"
      },
      {
        week: 8,
        title: "Celebration and Review",
        goals: ["Show off all skills", "Celebrate progress", "Plan next steps"],
        activities: [
          "Dress-up recital for family",
          "Play all favorite songs",
          "Receive special certificate",
          "Choose favorite piece to keep practicing"
        ],
        catholicConnection: "Celebrating our gifts like the angels celebrated Jesus's birth - with joy and music",
        ageAdaptation: "Make it a special celebration with rewards and recognition"
      }
    ]
  },
  dad: {
    name: "Dad's Preparation Track",
    weeks: [
      {
        week: 1,
        title: "Teaching Fundamentals Review",
        goals: ["Refresh basic piano skills", "Learn teaching techniques", "Prepare lesson materials"],
        activities: [
          "Practice all finger exercises yourself first",
          "Review basic music theory",
          "Research teaching methods for children",
          "Prepare teaching materials and aids"
        ],
        teachingTips: "Remember: model everything first, be patient, keep lessons short (15-20 minutes)",
        preparation: "Practice each week's exercises until comfortable before teaching"
      },
      {
        week: 2,
        title: "Note Reading Mastery",
        goals: ["Master treble and bass clef", "Prepare visual aids", "Practice teaching methods"],
        activities: [
          "Create flashcards for note identification",
          "Practice sight-reading simple pieces",
          "Prepare staff paper and teaching materials",
          "Learn memory devices for lines and spaces"
        ],
        teachingTips: "Use lots of repetition, make it a game, praise effort over perfection",
        preparation: "Have multiple ways to explain the same concept"
      },
      {
        week: 3,
        title: "Rhythm Teaching Techniques",
        goals: ["Master rhythm notation", "Learn clapping games", "Prepare rhythm activities"],
        activities: [
          "Practice clapping complex rhythms",
          "Learn rhythm counting systems", 
          "Prepare rhythm instruments/activities",
          "Research age-appropriate rhythm games"
        ],
        teachingTips: "Use body movement, counting aloud, and visual representation",
        preparation: "Have backup activities if one approach doesn't work"
      },
      {
        week: 4,
        title: "Advanced Five-Finger Work",
        goals: ["Master all five-finger patterns", "Learn scale theory", "Prepare technical exercises"],
        activities: [
          "Practice five-finger patterns in all keys",
          "Review fingering principles",
          "Learn simple scale theory",
          "Prepare graduated exercises for students"
        ],
        teachingTips: "Focus on curved fingers, relaxed hand position, slow practice",
        preparation: "Always demonstrate proper technique yourself"
      },
      {
        week: 5,
        title: "Two-Hand Coordination",
        goals: ["Master simple coordination", "Learn teaching progression", "Adapt for Alexander's needs"],
        activities: [
          "Practice simple two-hand pieces",
          "Learn graduated coordination exercises",
          "Research adaptations for hemiplegia",
          "Practice modified exercises for Alexander"
        ],
        teachingTips: "Hands separately first, then together very slowly",
        preparation: "Have alternative approaches ready for Alexander's challenges"
      },
      {
        week: 6,
        title: "Song Teaching Methods",
        goals: ["Master repertoire pieces", "Learn teaching songs", "Prepare accompaniments"],
        activities: [
          "Learn all student songs fluently",
          "Practice simple accompaniment patterns",
          "Prepare backing tracks if needed",
          "Learn song-teaching strategies"
        ],
        teachingTips: "Sing while playing, break songs into small sections, use familiar tunes",
        preparation: "Know songs well enough to help students without sheet music"
      },
      {
        week: 7,
        title: "Catholic Music Integration",
        goals: ["Master hymn arrangements", "Prepare theological discussions", "Connect faith and music"],
        activities: [
          "Learn simple hymn accompaniments",
          "Research Catholic teaching on music",
          "Prepare age-appropriate faith discussions",
          "Practice integrating prayer with lessons"
        ],
        teachingTips: "Keep theological discussions simple and wonder-filled",
        preparation: "Connect every musical concept to larger spiritual truths"
      },
      {
        week: 8,
        title: "Assessment and Planning",
        goals: ["Evaluate student progress", "Plan next phase", "Refine teaching approach"],
        activities: [
          "Assess each child's strengths and challenges",
          "Plan individualized next steps",
          "Research intermediate methods",
          "Prepare celebration and goal-setting"
        ],
        teachingTips: "Focus on encouragement, celebrate all progress, set realistic goals",
        preparation: "Have clear vision for next phase of learning"
      }
    ]
  }
};

export const leftHandExercises: ExerciseCategory[] = [
  {
    title: "Daily Warm-up Routine (10 minutes)",
    exercises: [
      {
        name: "Gentle Massage",
        duration: "2 minutes",
        description: "Massage left hand and forearm gently, focusing on loosening tight muscles"
      },
      {
        name: "Finger Stretches",
        duration: "2 minutes",
        description: "Gently stretch each finger, hold for 10 seconds each"
      },
      {
        name: "Therapy Putty",
        duration: "3 minutes",
        description: "Squeeze and knead therapy putty to build strength"
      },
      {
        name: "Piano Taps",
        duration: "3 minutes",
        description: "Tap each finger slowly on piano keys, focusing on control"
      }
    ]
  },
  {
    title: "Progressive Piano Exercises",
    exercises: [
      {
        name: "Single Finger Press",
        description: "Press one key at a time with left hand, hold for 3 seconds"
      },
      {
        name: "Two-Finger Patterns",
        description: "Use thumb and index finger together, then other combinations"
      },
      {
        name: "Simple Bass Support",
        description: "Hold single bass notes while right hand plays melody"
      },
      {
        name: "Modified Scales",
        description: "Play C-D-E pattern slowly, focusing on evenness"
      }
    ]
  },
  {
    title: "Daily Life Strengthening",
    exercises: [
      {
        name: "Play-Doh Activities",
        description: "Roll, pinch, and shape Play-Doh for 10 minutes daily"
      },
      {
        name: "Button Practice",
        description: "Practice buttoning and unbuttoning clothes"
      },
      {
        name: "Coin Sorting",
        description: "Pick up and sort coins using left hand only"
      },
      {
        name: "Writing Exercises",
        description: "Simple left-hand writing practice for 5 minutes"
      }
    ]
  }
];

export const weeklySchedule: WeeklySchedule = {
  Monday: "Main lesson day - Alexander (20 min), Adrianna (15 min), Dad prep (30 min)",
  Tuesday: "Rest day - Self-directed practice and Alexander's left hand exercises",
  Wednesday: "Individual practice - Children work independently on assigned pieces",
  Thursday: "Dad's advancement session (30 min) - Prepare for upcoming lessons",
  Friday: "Family music time - Both children together (25 min), Musical games",
  Saturday: "Sacred music focus - Hymns, prayer songs, and family worship",
  Sunday: "Sabbath rest - Listen to beautiful sacred music during family time"
};