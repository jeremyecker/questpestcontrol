// lib/quest-lead-capture-data.ts — Quest Pest Control
// 18 high-intent lead capture pages: 3 regions × 6 search intents

export interface LeadCapturePage {
  region: string;
  intent: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  intro: string;
  towns: string[];
  faqs: { q: string; a: string }[];
  urgencyText: string;
}

export const leadCapturePages: LeadCapturePage[] = [
  // ─────────────────────────────────────────────
  // SUFFOLK COUNTY
  // ─────────────────────────────────────────────
  {
    region: 'suffolk',
    intent: 'pest-control-near-me',
    title: 'Pest Control Near Me — Suffolk County, NY',
    metaTitle: 'Pest Control Near Me | Suffolk County NY | Quest Pest Control',
    metaDescription: 'Looking for pest control near you in Suffolk County? Quest Pest Control serves Huntington, Babylon, Islip & all of Suffolk. Call (631) 228-4498 today.',
    heroHeadline: 'Local Pest Control Right Here in Suffolk County',
    intro: `When you search for pest control near you in Suffolk County, you need more than a generic national franchise — you need a team that understands the specific pressures Long Island's wooded communities face every season. Suffolk County's landscape is a mosaic of oak and maple forests, coastal marshes, and dense suburban neighborhoods stretching from the North Shore to the South Shore. This combination creates ideal habitat for termites that tunnel through wood-framed homes, deer ticks that emerge in spring and persist through fall, rodents seeking shelter as temperatures drop, and carpenter ants that exploit moisture-damaged wood around decks and foundations.\n\nQuest Pest Control was built for exactly this environment. Our licensed technicians live and work across Suffolk County — from Huntington's harbor-front homes to the seasonal properties of Patchogue and Brookhaven. We know which pests surge after a wet spring, why ticks are particularly dense along wooded corridors, and how to protect the unique architecture of North Shore estates and South Shore colonials alike. When you call us, you're not reaching a call center in another state — you're connecting with a local crew ready to assess your property the same day or next day and deliver treatment that gets results. Pest pressure in Suffolk is real and year-round; professional management keeps your home, your family, and your investment protected every season.`,
    towns: ['Huntington', 'Babylon', 'Smithtown', 'Islip', 'Brookhaven', 'Patchogue', 'Northport', 'Bay Shore'],
    faqs: [
      {
        q: 'What pests are most common in Suffolk County homes?',
        a: 'Termites, deer ticks, rodents, carpenter ants, and stinging insects are the most frequent pests we treat in Suffolk County. Wooded lots and waterfront properties face heightened tick and termite pressure year-round.',
      },
      {
        q: 'How quickly can you reach my Suffolk County home?',
        a: 'We offer same-day and next-day appointments across Suffolk County. For urgent situations — active rodent intrusions, wasp nests near entryways, or visible termite swarms — we prioritize rapid response.',
      },
      {
        q: 'Do you treat both the interior and exterior of my home?',
        a: 'Yes. A thorough pest control program addresses both the inside of your home and the perimeter, foundation, and yard. Our technicians inspect all entry points and harborage areas before recommending a treatment plan.',
      },
      {
        q: 'How do I know if I have termites in my Suffolk County home?',
        a: 'Mud tubes along foundations, hollow-sounding wood, discarded wings near windowsills, and small pinholes in drywall are all warning signs. Call us for a free inspection — termites cause significant damage quickly if left untreated.',
      },
    ],
    urgencyText: 'Pests don\'t wait — neither should you. Call now for same-day availability in Suffolk County.',
  },
  {
    region: 'suffolk',
    intent: 'exterminator-near-me',
    title: 'Exterminator Near Me — Suffolk County, NY',
    metaTitle: 'Exterminator Near Me | Suffolk County NY | Quest Pest Control',
    metaDescription: 'Need a licensed exterminator in Suffolk County? Quest Pest Control serves Huntington, Babylon, Islip & beyond. Termites, ticks, rodents. Call (631) 228-4498.',
    heroHeadline: 'Licensed Suffolk County Exterminators — Local & Ready',
    intro: `Finding a reliable exterminator near you in Suffolk County means finding someone who knows the terrain. Suffolk's 912 square miles of pine barrens, coastal wetlands, wooded North Shore bluffs, and dense South Shore neighborhoods each carry distinct pest threats that out-of-area companies simply don't understand. A technician who treats apartments in Midtown Manhattan will not appreciate the tick corridors that run through wooded lots in Setauket, the termite colonies that thrive in the moisture-rich soil of East Islip, or the roof rat populations that move from storage sheds to home attics when the weather turns.\n\nQuest Pest Control's team of licensed exterminators has spent years working across every corner of Suffolk County — from Kings Park and Commack in the north to Sayville and Bellport along the South Shore. We're equipped to handle the full spectrum of Suffolk pest challenges: Formosan and Eastern subterranean termites, brown-banded and German cockroaches, deer mice, Norway rats, white-footed mice that carry Lyme-infected ticks, and the seasonal surge of stinging insects in late summer. Every service begins with a thorough inspection, proceeds with targeted treatment that eliminates current infestations, and concludes with a prevention plan designed to keep your home clear season after season. No cookie-cutter programs — just experienced, local exterminators who stand behind their work.`,
    towns: ['Huntington', 'Commack', 'Smithtown', 'Kings Park', 'Sayville', 'Islip', 'Bay Shore', 'Bellport'],
    faqs: [
      {
        q: 'Are Quest\'s exterminators licensed in New York State?',
        a: 'Yes. All of our technicians hold New York State DEC pesticide applicator licenses and receive ongoing training in Integrated Pest Management (IPM) practices.',
      },
      {
        q: 'What is the difference between pest control and extermination?',
        a: 'Extermination focuses on eliminating an active infestation, while ongoing pest control adds preventive treatments to keep pests from returning. We offer both — starting with extermination of the current problem, then transitioning to a maintenance program if you choose.',
      },
      {
        q: 'Do you handle tick treatments for Suffolk County properties?',
        a: 'Absolutely. Tick control is one of our most requested services in Suffolk County. We treat lawn perimeters, wooded edges, and landscaping with barrier sprays timed to the tick life cycle, typically spring through early fall.',
      },
      {
        q: 'Can you exterminate pests in a finished basement or crawl space?',
        a: 'Yes. Basements and crawl spaces are among the most common entry points and harborage areas for rodents, centipedes, silverfish, and moisture-loving insects. We treat these areas as part of a comprehensive interior inspection.',
      },
    ],
    urgencyText: 'Active infestation? Our Suffolk County exterminators are on call. Get same-day help now.',
  },
  {
    region: 'suffolk',
    intent: 'emergency-pest-control',
    title: 'Emergency Pest Control — Suffolk County, NY',
    metaTitle: 'Emergency Pest Control Suffolk County NY | Quest Pest Control',
    metaDescription: 'Emergency pest control in Suffolk County. Fast response for rodents, stinging insects, bed bugs & more. Licensed local team. Call (631) 228-4498 now.',
    heroHeadline: 'Emergency Pest Control in Suffolk County — Fast Response',
    intro: `Pest emergencies don't follow business hours. A wasp nest discovered in your attic an hour before a backyard party, a mouse running across your kitchen counter, a termite swarm pouring from the wall on a Sunday morning — these situations demand immediate, professional action. In Suffolk County, where wooded neighborhoods meet coastal properties and suburban homes press up against wildlife corridors, pest emergencies are an unfortunate reality that homeowners face with regularity.\n\nQuest Pest Control maintains emergency response availability across Suffolk County because we understand that waiting is not an option when pests threaten your family's wellbeing or your property's integrity. Our emergency team is staffed with senior technicians who arrive equipped to assess and treat the full range of urgent pest situations: active rodent intrusions with visible entry points, large stinging insect colonies near living areas, suspected termite swarms, and sudden bed bug discoveries before an out-of-town guest arrives. We don't just spray and leave — our emergency response includes a detailed inspection to identify the source, targeted treatment of the infestation, and a documented action plan to prevent recurrence. When you call Quest in a pest emergency, you get a clear-headed, experienced response from a team that treats your situation with the urgency it deserves. Suffolk County homeowners from Huntington to Riverhead rely on us when seconds matter.`,
    towns: ['Huntington', 'Babylon', 'Patchogue', 'Riverhead', 'Smithtown', 'Islip', 'Northport', 'Brookhaven'],
    faqs: [
      {
        q: 'What qualifies as a pest emergency in Suffolk County?',
        a: 'Situations requiring urgent attention include: active wasp or hornet nests near living areas, live rodents inside the home, visible termite swarms, severe cockroach infestations in kitchens, and bed bug discoveries before guests arrive. Call us and we\'ll assess the urgency immediately.',
      },
      {
        q: 'How quickly can Quest respond to a pest emergency in Suffolk County?',
        a: 'We prioritize emergency calls and aim to respond same-day across most of Suffolk County. Call (631) 228-4498 and we\'ll coordinate the fastest available appointment with an experienced technician.',
      },
      {
        q: 'What should I do while waiting for the emergency exterminator to arrive?',
        a: 'For rodents: seal off the area if possible and avoid handling droppings. For wasps: keep windows and doors closed and stay away from the nest. For termite swarms: take photos and contain the area. For bed bugs: avoid moving bedding to other rooms, which can spread the infestation.',
      },
      {
        q: 'Will an emergency treatment fully eliminate the problem in one visit?',
        a: 'Many emergencies can be resolved in a single visit — particularly stinging insect nests and rodent entry issues. Others, like termite colonies or bed bug infestations, require follow-up treatment. We\'ll give you an honest assessment and clear timeline on the first visit.',
      },
    ],
    urgencyText: 'Pest emergency in Suffolk County? Call us right now — same-day response available.',
  },
  {
    region: 'suffolk',
    intent: 'same-day-pest-control',
    title: 'Same Day Pest Control — Suffolk County, NY',
    metaTitle: 'Same Day Pest Control Suffolk County NY | Quest Pest Control',
    metaDescription: 'Same-day pest control service across Suffolk County. Rodents, termites, ticks & more. Licensed local technicians. Call (631) 228-4498 for today\'s appointment.',
    heroHeadline: 'Same Day Pest Control Across Suffolk County',
    intro: `When you discover a pest problem in your Suffolk County home, the last thing you want to hear is "the next available appointment is two weeks out." At Quest Pest Control, we've structured our team and scheduling specifically to offer same-day pest control service across Suffolk County — because pests don't wait, and neither should you.\n\nSuffolk County's diverse landscape means pest problems can escalate rapidly. A few rodents in the garage can become an infestation within days. A small ant trail into the kitchen can signal a large colony in the walls. A single termite swarm in spring is the visible sign of a colony that may have been active for years, consuming structural wood unseen. Same-day service from an experienced technician means the problem gets assessed and treatment begins before it worsens.\n\nOur Suffolk County team covers the entire county — from the wooded neighborhoods of Huntington, Dix Hills, and Hauppauge on the North Shore, to the beachfront communities of Babylon, West Islip, and Sayville on the South Shore, and out to the East End towns of Riverhead and Brookhaven. We maintain same-day capacity because we know that property owners and property managers in Suffolk County need responsive, professional pest control they can count on. Call before noon for the best chance at a same-day slot — our dispatchers work with your schedule to get a licensed technician to your door as quickly as possible.`,
    towns: ['Huntington', 'Hauppauge', 'Dix Hills', 'Babylon', 'West Islip', 'Sayville', 'Riverhead', 'Medford'],
    faqs: [
      {
        q: 'Can I really get same-day pest control in Suffolk County?',
        a: 'Yes. We maintain same-day availability across Suffolk County. Call early in the day for the best chance of a morning or afternoon appointment. We\'ll confirm a time window when you call.',
      },
      {
        q: 'What pests can be treated same-day?',
        a: 'Most pest situations qualify for same-day treatment, including rodent intrusions, cockroach infestations, ant problems, wasp and bee nests, and general pest inspections. Termite and bed bug treatments may require a next-day start after assessment.',
      },
      {
        q: 'Do same-day appointments cost more than scheduled visits?',
        a: 'No. We do not charge a premium for same-day service. Your quote is based on the scope of treatment, not the scheduling urgency.',
      },
      {
        q: 'What should I have ready when the technician arrives for a same-day visit?',
        a: 'Clear access to the affected areas is most helpful — move items away from walls in garages or basements, and let the technician know where you\'ve observed pest activity. That\'s all we need to get started.',
      },
    ],
    urgencyText: 'Call before noon for today\'s appointment. Suffolk County same-day service available now.',
  },
  {
    region: 'suffolk',
    intent: 'bed-bug-exterminator',
    title: 'Bed Bug Exterminator — Suffolk County, NY',
    metaTitle: 'Bed Bug Exterminator Suffolk County NY | Quest Pest Control',
    metaDescription: 'Professional bed bug extermination in Suffolk County. Thorough inspections & proven treatments for Huntington, Babylon, Islip & all communities. Call (631) 228-4498.',
    heroHeadline: 'Suffolk County Bed Bug Extermination — Thorough & Effective',
    intro: `Bed bugs have become one of the most challenging pest problems facing Long Island homeowners, and Suffolk County is no exception. Despite their reputation as an urban pest, bed bugs travel readily on luggage, furniture, and clothing — making them just as common in the quiet neighborhoods of Huntington, the seasonal rentals of the Hamptons, and the colonial-style homes of Smithtown as they are anywhere else. A single hitchhiker from a hotel or a piece of secondhand furniture can launch a full infestation within weeks.\n\nQuest Pest Control specializes in comprehensive bed bug extermination across Suffolk County. Our process begins with a methodical inspection — examining mattress seams, box spring frames, headboards, baseboards, electrical outlets, and upholstered furniture for live insects, shed skins, fecal spotting, and egg casings. Once the scope of infestation is confirmed, we deploy a multi-method treatment protocol that combines residual treatments in harborage zones with targeted application in adjacent areas where bed bugs travel between feedings. We follow up at scheduled intervals to address any surviving nymphs that hatch after initial treatment.\n\nBed bug work requires patience and expertise. Our Suffolk County technicians are trained specifically in bed bug biology, behavior, and the treatment techniques that produce reliable results — not just temporary reduction. We'll also provide detailed preparation instructions to maximize treatment effectiveness and help prevent reinfestation after we're done.`,
    towns: ['Huntington', 'Smithtown', 'Babylon', 'Islip', 'Patchogue', 'Riverhead', 'Southampton', 'Northport'],
    faqs: [
      {
        q: 'How do I know if I have bed bugs in my Suffolk County home?',
        a: 'Look for small rust-colored stains on bedding, tiny shed skins near mattress seams, a faint musty odor, and unexplained bites that appear in clusters or lines on exposed skin overnight. A professional inspection will confirm the presence and extent of infestation.',
      },
      {
        q: 'How many treatments are needed to eliminate bed bugs?',
        a: 'Most infestations require two to three treatments spaced two weeks apart to account for the egg hatching cycle. We\'ll assess your specific situation and give you a clear treatment schedule on the first visit.',
      },
      {
        q: 'Do I need to leave my home during bed bug treatment?',
        a: 'We will advise you on re-entry timing based on the treatment method used. Typically, residents and pets need to vacate for a few hours during and after treatment. We\'ll provide complete preparation and re-entry instructions before we arrive.',
      },
      {
        q: 'Can bed bugs spread from one room to another?',
        a: 'Yes. Bed bugs travel along walls, through electrical conduits, and on clothing and bedding. Treating only the bedroom is rarely sufficient. We inspect and treat adjacent rooms and common areas as part of a thorough bed bug protocol.',
      },
    ],
    urgencyText: 'Don\'t let bed bugs spread. Call today for a thorough Suffolk County bed bug inspection.',
  },
  {
    region: 'suffolk',
    intent: 'free-pest-inspection',
    title: 'Free Pest Inspection — Suffolk County, NY',
    metaTitle: 'Free Pest Inspection Suffolk County NY | Quest Pest Control',
    metaDescription: 'Get a free pest inspection in Suffolk County. Our licensed technicians inspect your home for termites, rodents, ticks & more. Call (631) 228-4498 to schedule.',
    heroHeadline: 'Free Pest Inspection for Suffolk County Homeowners',
    intro: `Most pest problems in Suffolk County homes go undetected until they've caused real damage or become a full infestation. Termites can consume structural timber for years before homeowners notice hollow-sounding baseboards or bubbling paint. Rodents establish nesting colonies in wall voids and attic insulation before the first gnaw marks appear on a pantry item. Carpenter ants tunnel through moisture-damaged wood around decks and windowsills without leaving obvious signs until the damage is extensive.\n\nA professional pest inspection from Quest Pest Control is designed to find these problems before they escalate. Our licensed technicians conduct a thorough examination of your Suffolk County home — crawl spaces, attics, basements, foundation perimeters, exterior wood structures, and interior living areas. We look for current infestations, conditions that invite pest activity (moisture, entry gaps, wood-to-soil contact), evidence of previous activity, and structural vulnerabilities that homeowners can address proactively.\n\nWe offer free inspections because we believe informed homeowners make better decisions about their property. You'll receive a clear, honest assessment of what we find — no high-pressure sales tactics, no manufactured urgency. If we find a problem, we'll explain exactly what it is, what it means for your home, and what treatment options are available. If your home is clear, we'll tell you that too, along with recommendations for ongoing prevention. Whether you're a new homeowner, preparing to sell, or simply overdue for a checkup, our Suffolk County inspection team is ready to help.`,
    towns: ['Huntington', 'Babylon', 'Smithtown', 'Islip', 'Brookhaven', 'Patchogue', 'Hauppauge', 'Port Jefferson'],
    faqs: [
      {
        q: 'What does a free pest inspection include?',
        a: 'Our free inspection covers the full interior and exterior of your home — including the attic, basement or crawl space, foundation perimeter, garage, and visible wood structures. We check for current pest activity, entry points, moisture issues, and conducive conditions.',
      },
      {
        q: 'How long does a pest inspection take?',
        a: 'Most single-family home inspections take 30 to 60 minutes depending on the size of the property and accessibility of crawl spaces and attic areas. We\'ll let you know what to expect when you schedule.',
      },
      {
        q: 'Is the inspection really free, or are there hidden charges?',
        a: 'The inspection is completely free with no obligation to purchase treatment. If we identify a problem and recommend treatment, you can take the estimate and decide at your own pace — there\'s no pressure.',
      },
      {
        q: 'Should I get a pest inspection before buying a home in Suffolk County?',
        a: 'Absolutely. Suffolk County homes face real termite and rodent risk, and a pre-purchase pest inspection provides critical information that a standard home inspection may not address in depth. We can often schedule within 24–48 hours for real estate transactions.',
      },
    ],
    urgencyText: 'Schedule your free Suffolk County inspection today — no obligation, no pressure.',
  },

  // ─────────────────────────────────────────────
  // NASSAU COUNTY
  // ─────────────────────────────────────────────
  {
    region: 'nassau',
    intent: 'pest-control-near-me',
    title: 'Pest Control Near Me — Nassau County, NY',
    metaTitle: 'Pest Control Near Me | Nassau County NY | Quest Pest Control',
    metaDescription: 'Pest control near you in Nassau County. Quest Pest Control serves Garden City, Hempstead, Levittown & all Nassau communities. Call (631) 228-4498 today.',
    heroHeadline: 'Professional Pest Control Right Here in Nassau County',
    intro: `Nassau County's tightly packed suburban neighborhoods, coastal communities, and dense housing stock create a unique set of pest management challenges that demand local expertise. With some of the highest population densities on Long Island and a mix of single-family homes, multi-family residences, and commercial properties packed into a relatively compact county, pest pressure in Nassau can be intense and spread quickly between neighboring properties.\n\nThe county's proximity to multiple waterways — Jamaica Bay, the South Shore bays, and the Long Island Sound coastline — creates coastal moisture conditions that favor termites, carpenter ants, and moisture-loving insects in ground-level structures and older wood-frame homes. Ants are a persistent complaint across Nassau communities, with pavement ants and odorous house ants invading kitchens in spring and summer. Mosquitoes breed in the standing water common to low-lying coastal areas. Rodents navigate the dense housing and commercial corridors year-round, finding ready access through aging foundations and utility penetrations.\n\nQuest Pest Control brings targeted expertise to Nassau County's specific pest landscape. Our licensed technicians are familiar with the architectural styles, neighborhood layouts, and seasonal pest patterns across communities from Garden City and Hempstead to Long Beach and Oyster Bay. We combine thorough inspections with integrated pest management strategies that address both the symptoms you can see and the root conditions driving pest activity into your home.`,
    towns: ['Garden City', 'Hempstead', 'Levittown', 'Great Neck', 'Freeport', 'Massapequa', 'Long Beach', 'Oceanside'],
    faqs: [
      {
        q: 'What are the most common pests in Nassau County homes?',
        a: 'Ants (pavement, odorous house, and carpenter), rodents, termites, mosquitoes, and cockroaches are the most frequent pest problems we address in Nassau County. Coastal areas also see higher mosquito and moisture pest pressure.',
      },
      {
        q: 'Can pest problems spread from neighbors\' properties to mine in Nassau County?',
        a: 'Yes. Nassau\'s dense housing makes cross-property pest movement common. Rodents follow utility lines and fence lines between properties. Ants, cockroaches, and bed bugs can migrate through shared walls in multi-family buildings. A perimeter treatment creates a barrier around your specific property.',
      },
      {
        q: 'Do you service apartments and condos in Nassau County?',
        a: 'Yes. We work with individual tenants, property managers, and building owners to treat pest problems in multi-family units and condominiums throughout Nassau County.',
      },
      {
        q: 'How often should I have pest control service in Nassau County?',
        a: 'For most Nassau County homeowners, quarterly service provides the best year-round protection — with seasonal treatments timed to spring ant and mosquito emergence, summer stinging insects, fall rodent prevention, and winter interior pest management.',
      },
    ],
    urgencyText: 'Serving all of Nassau County — call now for a fast, professional response.',
  },
  {
    region: 'nassau',
    intent: 'exterminator-near-me',
    title: 'Exterminator Near Me — Nassau County, NY',
    metaTitle: 'Exterminator Near Me | Nassau County NY | Quest Pest Control',
    metaDescription: 'Licensed exterminators serving Nassau County. Garden City, Hempstead, Levittown, Freeport & more. Ants, termites, rodents & mosquitoes. Call (631) 228-4498.',
    heroHeadline: 'Nassau County Exterminators — Licensed, Local, Effective',
    intro: `When Nassau County homeowners and property managers search for an exterminator nearby, they're often dealing with a problem that has already grown beyond the point of DIY management. Over-the-counter sprays and traps can reduce visible pest activity temporarily, but they rarely address the colonies, nesting sites, and entry pathways driving the infestation. That's where professional extermination makes a decisive difference.\n\nQuest Pest Control operates throughout Nassau County with a team of licensed exterminators trained in the pest species and infestation patterns specific to Long Island's most densely populated county. We understand the difference between a pavement ant colony nesting in a cracked driveway apron and a carpenter ant infestation in moisture-damaged wood framing. We know how to identify Norway rat burrow systems along fence lines versus roof rat activity in attic spaces. We recognize the signs of subterranean termites in older wood-frame colonials common across Nassau's post-war neighborhoods.\n\nOur extermination approach is methodical: inspect first, identify the pest and extent of infestation, then treat with precision. We use targeted application techniques that concentrate treatment where pests live and breed — not broadcast sprays that dissipate quickly without reaching harborage sites. Nassau County homeowners from Massapequa to Manhasset, from Lynbrook to Roslyn, trust Quest when they need an exterminator who will get the job done right.`,
    towns: ['Massapequa', 'Manhasset', 'Lynbrook', 'Roslyn', 'Freeport', 'Hempstead', 'Garden City', 'Hicksville'],
    faqs: [
      {
        q: 'What should I look for when choosing an exterminator in Nassau County?',
        a: 'Look for a current New York State DEC pesticide applicator license, verifiable local experience, a clear written estimate before treatment begins, and a guarantee policy that covers follow-up visits if pests return. Quest checks all of these boxes.',
      },
      {
        q: 'How do exterminators handle ant infestations in Nassau County homes?',
        a: 'Effective ant extermination combines interior baiting in active trails with exterior perimeter treatment around the foundation. We also identify the nesting site — often in wall voids, under slabs, or in landscape mulch — and treat it directly for lasting control.',
      },
      {
        q: 'Can you exterminate pests in a commercial property in Nassau County?',
        a: 'Yes. We serve restaurants, retail spaces, office buildings, and multi-family properties across Nassau County. Commercial accounts receive customized treatment schedules and documentation packages for health department compliance.',
      },
      {
        q: 'Do you offer a guarantee on extermination services?',
        a: 'Yes. If pests return between scheduled treatments, we\'ll return to retreat at no additional charge. Our goal is to deliver results that hold — not to keep billing for the same unresolved problem.',
      },
    ],
    urgencyText: 'Nassau County exterminators ready to respond — call for a same-day quote.',
  },
  {
    region: 'nassau',
    intent: 'emergency-pest-control',
    title: 'Emergency Pest Control — Nassau County, NY',
    metaTitle: 'Emergency Pest Control Nassau County NY | Quest Pest Control',
    metaDescription: 'Emergency pest control in Nassau County. Fast response for rodents, wasps, bed bugs & more. Licensed technicians serving all of Nassau. Call (631) 228-4498.',
    heroHeadline: 'Emergency Pest Control in Nassau County — Call Now',
    intro: `Pest emergencies in Nassau County have a particular urgency. In a county where homes sit closely together and multi-family buildings house dozens of residents, a pest emergency in one unit can rapidly become a building-wide crisis. A single cockroach infestation spreading through shared walls, a mouse finding a gap between neighboring rowhouses, a wasp colony behind a shared fence line — these situations require fast, decisive professional action.\n\nQuest Pest Control maintains emergency response capacity across Nassau County because we've seen what happens when urgent pest situations are handled slowly. The wasp nest that gets "scheduled for next week" results in a family member's sting reaction. The rodents that "can wait until Monday" establish multiple nesting sites over a weekend. The suspected bed bug problem in one apartment that isn't addressed immediately spreads to adjacent units in a matter of days.\n\nOur Nassau County emergency team includes senior technicians with experience in the pest species and building types specific to this county — from the older wood-frame colonials of Hempstead and Freeport to the newer construction in Levittown and East Meadow, from the high-density apartment corridors along Hempstead Turnpike to the waterfront homes of Long Beach and Atlantic Beach. When you call with a pest emergency, you get a straight assessment of urgency, a confirmed arrival time, and a technician who arrives with everything needed to address the situation immediately.`,
    towns: ['Garden City', 'Hempstead', 'Freeport', 'Long Beach', 'Levittown', 'East Meadow', 'Massapequa', 'Great Neck'],
    faqs: [
      {
        q: 'What pest emergencies are most common in Nassau County?',
        a: 'In Nassau County we most often respond urgently to wasp and yellow jacket nests near living areas, active rodent intrusions in kitchens and living spaces, cockroach infestations in food-preparation areas, and bed bug discoveries in rental properties and multi-family buildings.',
      },
      {
        q: 'Can you respond to a pest emergency in a Nassau County apartment building?',
        a: 'Yes. We work with property managers and individual tenants alike. For multi-unit emergencies, we coordinate with building management to ensure all affected units are assessed and treatment is applied systematically.',
      },
      {
        q: 'What if I find a large wasp nest on my Nassau County property?',
        a: 'Do not disturb the nest. Keep windows and doors closed, keep children and pets away from the area, and call us immediately. Wasp nest removal is one of our most frequent emergency responses — we arrive equipped for complete, same-day removal.',
      },
      {
        q: 'Is emergency pest control covered by homeowner\'s insurance in Nassau County?',
        a: 'Most standard homeowner\'s insurance policies do not cover pest control costs. However, if a pest infestation has caused structural damage (as in the case of termites or rodents chewing wiring), that damage may be covered depending on your policy. We can provide detailed treatment documentation for insurance purposes.',
      },
    ],
    urgencyText: 'Pest emergency in Nassau County? We respond fast — call (631) 228-4498 now.',
  },
  {
    region: 'nassau',
    intent: 'same-day-pest-control',
    title: 'Same Day Pest Control — Nassau County, NY',
    metaTitle: 'Same Day Pest Control Nassau County NY | Quest Pest Control',
    metaDescription: 'Same-day pest control in Nassau County. Licensed exterminators serving Garden City, Hempstead, Freeport & all Nassau communities. Call (631) 228-4498 today.',
    heroHeadline: 'Same Day Pest Control Throughout Nassau County',
    intro: `Nassau County homeowners and property managers don't have time to wait days or weeks for pest control service. When ants appear in a kitchen, a rodent is spotted in a basement, or a tenant reports signs of bed bugs, the pressure to act quickly is real — and delaying treatment only allows the problem to grow. Quest Pest Control offers genuine same-day pest control availability across Nassau County, staffed and scheduled to respond when you need us most.\n\nOur Nassau County team covers the full breadth of the county — the waterfront communities of Long Beach, Atlantic Beach, and Island Park; the dense residential corridors of Hempstead, Uniondale, and Elmont; the established neighborhoods of Garden City, Mineola, and New Hyde Park; and the larger residential townships of Levittown, Bethpage, and Hicksville. Wherever you are in Nassau County, our dispatchers will work to get a licensed technician to your door the same day you call.\n\nSame-day service doesn't mean rushed or incomplete service. Our technicians arrive with fully stocked vehicles, current pest control equipment, and the training to assess and begin treating your specific pest problem during the first visit. We document findings, explain the treatment plan clearly, and answer your questions before we start. In Nassau County's fast-paced real estate and rental market, reliable same-day pest control from Quest is a resource property owners and managers count on throughout the year.`,
    towns: ['Garden City', 'Hempstead', 'Levittown', 'Freeport', 'Hicksville', 'Uniondale', 'New Hyde Park', 'Massapequa'],
    faqs: [
      {
        q: 'How do I request same-day pest control in Nassau County?',
        a: 'Call us at (631) 228-4498 as early in the day as possible. Calls received before noon have the highest likelihood of same-day scheduling. We\'ll confirm availability and provide a two-hour arrival window.',
      },
      {
        q: 'Do you offer same-day mosquito treatment for Nassau County yards?',
        a: 'Yes. Mosquito barrier treatments can be applied same-day when weather conditions permit. We treat perimeters, shrub beds, and standing water harborage areas to reduce mosquito populations around your property.',
      },
      {
        q: 'Can same-day service handle a large infestation?',
        a: 'Our technicians arrive equipped to handle both moderate and severe infestations on the first visit. For very large termite or bed bug infestations, a same-day assessment will determine the full scope, and treatment may extend into a follow-up appointment the next day.',
      },
      {
        q: 'Is same-day pest control available on weekends in Nassau County?',
        a: 'Yes. We offer weekend same-day service across Nassau County, though availability is more limited. Call early on Saturday or Sunday for the best chance of a same-day slot.',
      },
    ],
    urgencyText: 'Don\'t wait — same-day appointments available across Nassau County. Call now.',
  },
  {
    region: 'nassau',
    intent: 'bed-bug-exterminator',
    title: 'Bed Bug Exterminator — Nassau County, NY',
    metaTitle: 'Bed Bug Exterminator Nassau County NY | Quest Pest Control',
    metaDescription: 'Bed bug extermination in Nassau County. Thorough inspections & proven treatments for Garden City, Freeport, Levittown & all communities. Call (631) 228-4498.',
    heroHeadline: 'Nassau County Bed Bug Extermination — Thorough & Proven',
    intro: `Bed bugs have established themselves as one of the most persistent pest challenges in Nassau County, where a mix of dense residential neighborhoods, active tourism corridors, and frequent multi-family housing turnover creates ample opportunity for these insects to spread and take hold. Unlike many pest problems that are seasonal, bed bugs are an all-year issue — equally active in January and July, and just as common in well-maintained homes as in neglected ones.\n\nThe multi-family housing stock that characterizes large portions of Nassau County — apartment complexes in Hempstead, Elmont, and Valley Stream; garden apartments in Garden City and Mineola; mixed-use buildings along major corridors — presents a particularly challenging environment for bed bug control. When one unit is infested, adjacent units are at risk, and only a methodical, building-aware treatment approach can prevent spread and re-infestation.\n\nQuest Pest Control's bed bug extermination team brings specialized training and equipment to Nassau County engagements. We begin with a detailed inspection that examines all probable harborage sites — not just the mattress, but box springs, upholstered furniture, bed frames, baseboards, outlet covers, curtain rods, and wall art. Treatment combines residual chemical applications in harborage zones with contact treatments in travel pathways. For apartment and condo situations, we work with building management to coordinate adjacent-unit inspections and treatment sequencing that prevents cross-unit spread. We then follow up on a schedule aligned with the bed bug egg cycle to ensure complete elimination.`,
    towns: ['Garden City', 'Hempstead', 'Freeport', 'Elmont', 'Valley Stream', 'Massapequa', 'Mineola', 'Levittown'],
    faqs: [
      {
        q: 'How do bed bugs spread in Nassau County apartments and condos?',
        a: 'Bed bugs travel through wall voids, electrical conduits, plumbing chases, and along baseboards between adjacent units. They also spread via shared laundry rooms, elevators, and furniture moved between units. Professional treatment must address these pathways, not just the unit of origin.',
      },
      {
        q: 'What preparation is needed before a bed bug treatment in Nassau County?',
        a: 'We\'ll provide a detailed preparation checklist when you schedule. Generally this includes washing and heat-drying all bedding and clothing, clearing clutter around bed frames and furniture, and vacuuming baseboards. Adequate preparation significantly improves treatment outcomes.',
      },
      {
        q: 'How soon after bed bug treatment can we return to the bedroom?',
        a: 'Typically 4–6 hours after treatment once the product has dried. We\'ll give you specific re-entry guidance based on the treatment method used and the size of the treated area.',
      },
      {
        q: 'Can Quest treat a Nassau County rental property for bed bugs?',
        a: 'Yes. We work with both landlords and tenants on bed bug extermination in Nassau County rental properties. We can provide documentation of treatment for lease compliance purposes and coordinate with property management for multi-unit inspections.',
      },
    ],
    urgencyText: 'Bed bugs spread fast in Nassau County\'s dense housing. Call now for a same-day inspection.',
  },
  {
    region: 'nassau',
    intent: 'free-pest-inspection',
    title: 'Free Pest Inspection — Nassau County, NY',
    metaTitle: 'Free Pest Inspection Nassau County NY | Quest Pest Control',
    metaDescription: 'Free pest inspection for Nassau County homeowners. Licensed technicians inspect for termites, rodents, ants & more. No obligation. Call (631) 228-4498.',
    heroHeadline: 'Free Pest Inspection for Nassau County Homes',
    intro: `Nassau County's suburban landscape may look orderly and well-maintained on the surface, but beneath it — in crawl spaces, wall voids, attics, and foundation perimeters — pest activity can thrive undetected for months or years. The county's dense housing, mature landscaping, and proximity to coastal waterways create conditions that support persistent populations of termites, carpenter ants, rodents, and moisture insects throughout the year.\n\nA free professional pest inspection from Quest Pest Control gives Nassau County homeowners a clear picture of what's actually happening in and around their property. Our licensed technicians don't rely on visual sweeps from the doorway — we examine attic insulation for rodent runs and droppings, probe basement sill plates and rim joists for termite damage, inspect foundation perimeters for entry gaps and conducive moisture conditions, and check crawl spaces for evidence of wildlife and insect intrusion.\n\nNassau County's active real estate market makes pre-purchase pest inspections particularly valuable. Older homes in established neighborhoods like Garden City, Rockville Centre, and Great Neck carry years of history — and sometimes years of undisclosed pest activity. A professional inspection before closing protects buyers from inheriting problems that could cost thousands to remediate. We also provide inspections for homeowners preparing to sell, offering documentation of a current pest-free status that supports buyer confidence. Whatever your reason for requesting an inspection, our Nassau County team delivers a thorough, honest assessment you can rely on.`,
    towns: ['Garden City', 'Great Neck', 'Rockville Centre', 'Freeport', 'Hempstead', 'Massapequa', 'Levittown', 'Manhasset'],
    faqs: [
      {
        q: 'What areas of my Nassau County home does the free inspection cover?',
        a: 'Our inspection covers the full property: interior living areas, kitchen and bathrooms, basement or crawl space, attic, garage, exterior foundation perimeter, deck and patio structures, and visible landscaping elements like mulch beds adjacent to the foundation.',
      },
      {
        q: 'How do I schedule a free pest inspection in Nassau County?',
        a: 'Call us at (631) 228-4498 or use the form below. We\'ll confirm a convenient appointment time — typically available within 24–48 hours for Nassau County addresses.',
      },
      {
        q: 'Will the inspector look for termites specifically?',
        a: 'Yes. Termite inspection is a core component of every free inspection. Nassau County\'s aging wood-frame housing stock and coastal moisture conditions make termite risk real across the county. We\'ll check all wood-to-soil contact points, sill plates, basement framing, and exterior wood structures.',
      },
      {
        q: 'What if the inspection reveals a pest problem?',
        a: 'We\'ll explain exactly what we found, the severity of the situation, and the treatment options available. You\'ll receive a written estimate and can take as much time as you need to decide — no pressure and no obligation to book with us.',
      },
    ],
    urgencyText: 'Schedule your free Nassau County pest inspection — same-week availability, no obligation.',
  },

  // ─────────────────────────────────────────────
  // QUEENS
  // ─────────────────────────────────────────────
  {
    region: 'queens',
    intent: 'pest-control-near-me',
    title: 'Pest Control Near Me — Queens, NY',
    metaTitle: 'Pest Control Near Me | Queens NY | Quest Pest Control',
    metaDescription: 'Pest control near you in Queens, NY. Quest Pest Control serves Flushing, Jamaica, Astoria, Forest Hills & all Queens neighborhoods. Call (631) 228-4498 today.',
    heroHeadline: 'Local Pest Control in Queens — Fast, Reliable, Effective',
    intro: `Searching for pest control near you in Queens means searching for a team that understands urban pest pressure at its most concentrated. Queens is one of the most diverse and densely populated boroughs in New York City, and its combination of row houses, apartment buildings, attached homes, and mixed-use commercial corridors creates an environment where pests thrive and spread with remarkable speed. What starts as a cockroach problem in one ground-floor apartment can work its way through plumbing chases and wall voids to neighboring units within days. Rodents navigate the utility corridors, alleyways, and basement connections that link Queens' dense housing blocks without encountering meaningful barriers.\n\nQuest Pest Control serves Queens with technicians experienced in the specific pest challenges of urban, high-density environments. We know the difference between German cockroaches (the dominant kitchen and bathroom pest in Queens apartments) and the American cockroaches more common in basement and sewer-connected areas. We understand how bed bugs move between units in multi-family buildings and the treatment sequencing needed to prevent reinfestation from adjacent spaces. We recognize the rodent behavior patterns in urban row house settings versus suburban single-family homes.\n\nFrom Astoria and Flushing in the north to Howard Beach and Jamaica in the south, from Forest Hills and Rego Park in the center to Far Rockaway on the peninsula, our Queens pest control team covers the entire borough with the local knowledge and urban pest expertise this complex community demands.`,
    towns: ['Flushing', 'Jamaica', 'Astoria', 'Forest Hills', 'Jackson Heights', 'Howard Beach', 'Rego Park', 'Long Island City'],
    faqs: [
      {
        q: 'What pests are most common in Queens homes and apartments?',
        a: 'German cockroaches, Norway rats, house mice, bed bugs, and ants are the most frequent pest problems we address in Queens. Multi-family buildings and basement-level units face the highest cockroach and rodent pressure.',
      },
      {
        q: 'Can you treat a single apartment for pests, or does the whole building need service?',
        a: 'We can treat individual units and often achieve good results for isolated infestations. For cockroaches and bed bugs in multi-unit buildings, however, inspecting and treating adjacent units significantly improves long-term outcomes. We work with both individual tenants and building management.',
      },
      {
        q: 'Do you provide pest control documentation for NYC housing compliance in Queens?',
        a: 'Yes. We provide treatment records and inspection documentation that meet NYC Housing Preservation and Development (HPD) requirements for building management compliance.',
      },
      {
        q: 'How often should apartments in Queens have pest control service?',
        a: 'High-risk units in Queens buildings — particularly ground floor, basement, and units with known previous activity — benefit from monthly preventive service. Upper-floor units in well-managed buildings may maintain pest-free status with quarterly service.',
      },
    ],
    urgencyText: 'Queens pest pressure is real. Call now for local, fast, professional service.',
  },
  {
    region: 'queens',
    intent: 'exterminator-near-me',
    title: 'Exterminator Near Me — Queens, NY',
    metaTitle: 'Exterminator Near Me | Queens NY | Quest Pest Control',
    metaDescription: 'Licensed exterminators serving Queens, NY. Flushing, Astoria, Jamaica, Forest Hills & all neighborhoods. Cockroaches, rodents, bed bugs. Call (631) 228-4498.',
    heroHeadline: 'Queens Exterminators — Urban Expertise, Real Results',
    intro: `Finding a reliable exterminator near you in Queens requires finding someone equipped for the realities of urban pest control — not a company that applies suburban treatment protocols to apartment buildings and attached row houses and wonders why results don't hold. The pest biology in Queens' dense urban environment is different: cockroach populations in NYC apartments have developed resistance to many over-the-counter insecticides, requiring rotation of products and application methods to achieve consistent control. Rodent populations in urban settings are pressured from all directions — food sources in restaurants and residential kitchens, nesting opportunities in structural voids, and travel corridors through utility infrastructure — making population control a sustained effort rather than a one-time fix.\n\nQuest Pest Control's extermination team brings genuine urban pest management experience to Queens engagements. Our technicians understand gel bait placement for German cockroaches, void treatment techniques for rodent harborage in row house wall cavities, and the specific inspection protocols needed to find bed bug harborage in the cluttered, densely furnished apartments typical of many Queens neighborhoods. We know which building types carry the highest pest load in which Queens neighborhoods, and we calibrate our approach accordingly.\n\nWhether you're a tenant dealing with a landlord who isn't responding, a property manager maintaining a 40-unit building in Jackson Heights, or a homeowner in Howard Beach dealing with a rodent issue that keeps coming back, Quest's Queens exterminators have the training and tools to handle your situation.`,
    towns: ['Flushing', 'Jackson Heights', 'Howard Beach', 'Astoria', 'Jamaica', 'Rego Park', 'Ridgewood', 'Ozone Park'],
    faqs: [
      {
        q: 'Why do cockroaches keep coming back in my Queens apartment even after spraying?',
        a: 'Over-the-counter sprays and some professional aerosols drive cockroaches deeper into wall voids temporarily but don\'t eliminate colonies. Effective German cockroach extermination uses gel baits placed in harborage zones, void treatments, and if necessary, follow-up applications timed to the reproduction cycle.',
      },
      {
        q: 'Can a Queens exterminator help if my landlord isn\'t dealing with the pest problem?',
        a: 'Yes. We work directly with tenants. NYC law requires landlords to maintain pest-free premises, and documentation of a professional extermination attempt supports any complaint to HPD. We can also provide formal inspection reports that support housing complaints.',
      },
      {
        q: 'How do exterminators handle rodents in a Queens row house?',
        a: 'Row house rodent extermination typically involves exterior bait stations along foundation perimeters, interior snap trap deployment in active areas, identification and sealing of entry points (typically around pipes and utility penetrations), and monitoring visits to confirm elimination of the active population.',
      },
      {
        q: 'Is there an exterminator that covers all of Queens?',
        a: 'Quest Pest Control covers all Queens neighborhoods — from Astoria and Long Island City in the northwest to Far Rockaway in the southeast. Call us regardless of your specific neighborhood and we\'ll confirm coverage.',
      },
    ],
    urgencyText: 'Queens exterminators with real urban pest experience — call for fast, reliable service.',
  },
  {
    region: 'queens',
    intent: 'emergency-pest-control',
    title: 'Emergency Pest Control — Queens, NY',
    metaTitle: 'Emergency Pest Control Queens NY | Quest Pest Control',
    metaDescription: 'Emergency pest control in Queens, NY. Fast response for cockroaches, rodents, bed bugs & more. Serving all Queens neighborhoods. Call (631) 228-4498 now.',
    heroHeadline: 'Emergency Pest Control in Queens — Rapid Response',
    intro: `Pest emergencies in Queens carry a particular urgency that anyone who has lived in a dense urban apartment building understands intuitively. A roach infestation that explodes overnight in a restaurant kitchen threatens the business's operating license. Rats discovered in a basement storage area of a multi-unit building can compromise an entire building's health code standing. Bed bugs found in one unit of a Queens apartment complex can spread to three or four adjacent units within a week if not addressed immediately. These are not situations that can be scheduled for a standard appointment next week — they require fast, professional intervention.\n\nQuest Pest Control's emergency pest control service in Queens is designed for exactly these scenarios. Our technicians are trained in the rapid-response protocols appropriate for urban environments: quick, decisive inspection to establish the scope of the problem; targeted treatment focused on eliminating the active population and blocking spread pathways; clear documentation of findings and treatment applied; and a follow-up schedule to ensure the problem doesn't resurface.\n\nWe respond to pest emergencies across all of Queens — from the dense commercial corridors of Flushing's Main Street to the residential blocks of Forest Hills, from the waterfront communities of Howard Beach and Rockaway Beach to the apartment-dense neighborhoods of Jackson Heights and Corona. When you call Quest with a Queens pest emergency, you're connected with a team that treats your situation as what it is: urgent, consequential, and fully solvable with the right professional response.`,
    towns: ['Flushing', 'Jackson Heights', 'Forest Hills', 'Howard Beach', 'Jamaica', 'Astoria', 'Corona', 'Rego Park'],
    faqs: [
      {
        q: 'What pest emergencies are most common in Queens?',
        a: 'In Queens we most frequently respond urgently to severe German cockroach infestations in kitchens, active rodent intrusions in living spaces and basements, bed bug discoveries in rental units, and wasp nests near building entrances or air conditioning units.',
      },
      {
        q: 'How quickly can a pest control technician reach me in Queens?',
        a: 'We aim for same-day response across Queens. Call (631) 228-4498 as early as possible and we\'ll provide a confirmed arrival window. For commercial properties with regulatory implications, we can often dispatch within hours.',
      },
      {
        q: 'Can you handle a cockroach emergency in a Queens restaurant or food business?',
        a: 'Yes. We have experience treating food-service environments in Queens under regulatory timelines. Our technicians use techniques and products approved for food-handling areas, and we provide treatment documentation suitable for health department inspections.',
      },
      {
        q: 'What should a Queens apartment tenant do first when they discover bed bugs?',
        a: 'Notify your landlord in writing immediately and request professional extermination. Do not move bedding or furniture to other rooms, as this spreads the infestation. Document what you\'ve found with photos. If your landlord isn\'t responding, you can hire us directly and document the cost for HPD complaint purposes.',
      },
    ],
    urgencyText: 'Pest emergency in Queens? Call us now — same-day response across the borough.',
  },
  {
    region: 'queens',
    intent: 'same-day-pest-control',
    title: 'Same Day Pest Control — Queens, NY',
    metaTitle: 'Same Day Pest Control Queens NY | Quest Pest Control',
    metaDescription: 'Same-day pest control in Queens, NY. Cockroaches, rodents, bed bugs & more. Serving Flushing, Jamaica, Astoria & all neighborhoods. Call (631) 228-4498 today.',
    heroHeadline: 'Same Day Pest Control Across Queens, NY',
    intro: `Urban life in Queens moves at full speed, and pest problems discovered in the morning need professional treatment before the end of the day — not sometime next week. Quest Pest Control offers same-day pest control service across Queens because we understand that for city residents, swift professional intervention is the difference between a contained problem and a building-wide infestation.\n\nThe pest dynamics in Queens' diverse neighborhoods create situations that genuinely cannot wait. A German cockroach population in a Queens kitchen doubles every few weeks under favorable conditions — every day without treatment is additional spread into adjacent areas. Bed bugs in a densely furnished apartment can establish satellite harborage sites throughout a bedroom within 48 hours. A single Norway rat establishing nesting in a basement quickly signals others to follow. Same-day service from a qualified technician is not just a convenience in Queens — it's often the factor that determines whether a pest situation remains manageable.\n\nOur Queens same-day team covers all neighborhoods: from the high-rise and attached housing of Flushing, Corona, and Jackson Heights in north and central Queens, to the row houses and detached homes of Howard Beach, Richmond Hill, and Woodhaven in the south. We dispatch licensed technicians from our Long Island base into Queens efficiently, maintaining the same-day commitment that Queens residents and property managers depend on. Call before noon for the best same-day availability, and we'll confirm your appointment window when you call.`,
    towns: ['Flushing', 'Corona', 'Jackson Heights', 'Howard Beach', 'Richmond Hill', 'Woodhaven', 'Astoria', 'Jamaica'],
    faqs: [
      {
        q: 'Can I get same-day pest control for a cockroach problem in Queens?',
        a: 'Yes. Cockroach treatments are among our most common same-day requests in Queens. A technician will inspect the affected areas, apply targeted baits and residual treatments in harborage zones, and schedule a follow-up visit to confirm control.',
      },
      {
        q: 'Do you offer same-day bed bug inspections in Queens?',
        a: 'Yes. If you need a bed bug inspection confirmed same-day — for move-in, move-out, or a sudden discovery — call us early in the day. We\'ll send a technician to perform a thorough inspection and provide a written assessment.',
      },
      {
        q: 'How long does a same-day pest control treatment take in a Queens apartment?',
        a: 'Most apartment treatments take 45 minutes to 90 minutes depending on unit size and infestation scope. Commercial kitchens and larger units may take longer. We\'ll estimate the time when we confirm your appointment.',
      },
      {
        q: 'Can same-day service be provided for a Queens multi-unit building?',
        a: 'Yes, for individual unit treatment. Full building treatment requiring access to multiple units typically needs scheduling coordination, but we can begin with the primary affected unit same-day and plan the broader response for the following day.',
      },
    ],
    urgencyText: 'Same-day pest control in Queens — call now before your problem spreads.',
  },
  {
    region: 'queens',
    intent: 'bed-bug-exterminator',
    title: 'Bed Bug Exterminator — Queens, NY',
    metaTitle: 'Bed Bug Exterminator Queens NY | Quest Pest Control',
    metaDescription: 'Bed bug extermination in Queens, NY. Thorough inspections & effective treatments for apartments & homes in Flushing, Astoria, Jamaica & beyond. Call (631) 228-4498.',
    heroHeadline: 'Queens Bed Bug Extermination — Expert Urban Treatment',
    intro: `Bed bugs are one of the defining pest challenges of urban New York, and Queens — with its massive, diverse housing stock of apartment buildings, attached row houses, and multi-family dwellings — sees bed bug infestations regularly across every neighborhood and every income level. These insects are equal-opportunity parasites: they don't discriminate by cleanliness or property value. They travel on luggage from hotels, on secondhand furniture from thrift stores and curbside finds, and on the clothing of visitors — making exposure possible for any household.\n\nWhat makes bed bug extermination in Queens particularly complex is the building environment. In attached row houses where wall cavities connect adjacent units, or in apartment buildings where dozens of units share plumbing chases and electrical conduits, bed bugs can migrate freely. Treating one unit while ignoring what's happening in adjacent spaces is a recipe for reinfestation within weeks. Effective bed bug extermination in Queens requires a building-aware strategy.\n\nQuest Pest Control's Queens bed bug team applies a multi-step extermination protocol calibrated for urban residential environments. We conduct detailed inspections of all probable harborage sites — mattress seams, box spring frames, headboards, baseboards, furniture joints, electrical outlets, curtain rods, and wall voids accessible behind outlet covers. Treatment combines targeted residual applications in harborage zones with crack-and-crevice treatments in travel pathways. We provide detailed written inspection reports that meet NYC housing documentation requirements, and we schedule follow-up visits aligned with the bed bug egg hatching cycle to ensure complete, lasting elimination.`,
    towns: ['Flushing', 'Astoria', 'Jamaica', 'Jackson Heights', 'Forest Hills', 'Long Island City', 'Rego Park', 'Howard Beach'],
    faqs: [
      {
        q: 'How do I know if I have bed bugs in my Queens apartment?',
        a: 'Signs include small rust-brown stains on bedding or mattress seams, tiny white eggs or shed skins near harborage areas, a sweet musty odor in heavily infested rooms, and unexplained bites in a line or cluster on skin exposed during sleep. Call us for a professional inspection to confirm.',
      },
      {
        q: 'Can bed bugs spread from my Queens apartment to neighboring units?',
        a: 'Yes. Bed bugs travel through wall voids, plumbing chases, and shared floor/ceiling assemblies in multi-unit buildings. Professional treatment should include inspection of adjacent units whenever a bed bug infestation is confirmed.',
      },
      {
        q: 'What is the most effective bed bug treatment for Queens apartments?',
        a: 'A chemical treatment combining residual insecticides in harborage areas with contact treatments in travel pathways, applied across two to three visits spaced two weeks apart to address hatching nymphs, produces reliable results in most apartment settings. We\'ll recommend the appropriate protocol after inspection.',
      },
      {
        q: 'What are my rights as a Queens tenant when my landlord won\'t treat for bed bugs?',
        a: 'NYC law (Local Law 69) requires landlords to maintain bedbug-free buildings and to provide annual Bed Bug Infestation History statements to tenants. If your landlord fails to remediate a reported bed bug infestation, you can file a complaint with HPD. We can provide inspection documentation to support your complaint.',
      },
    ],
    urgencyText: 'Queens bed bug problem? Act now before it spreads — call for a same-day inspection.',
  },
  {
    region: 'queens',
    intent: 'free-pest-inspection',
    title: 'Free Pest Inspection — Queens, NY',
    metaTitle: 'Free Pest Inspection Queens NY | Quest Pest Control',
    metaDescription: 'Free pest inspection in Queens, NY. Licensed technicians inspect for cockroaches, rodents, bed bugs & more. No obligation. Serving all neighborhoods. Call (631) 228-4498.',
    heroHeadline: 'Free Pest Inspection for Queens Homes & Apartments',
    intro: `In Queens' complex, layered housing environment, pest problems often establish themselves in areas that residents never see — inside wall voids, beneath floor boards, behind appliances, along the utility chases that connect one unit to the next. By the time a cockroach infestation becomes visible in a kitchen, the colony behind the walls may already number in the thousands. By the time a tenant notices bed bug bites, the harborage may extend under the bed frame, inside the box spring, and into the baseboards on three walls. A professional pest inspection finds the full scope of the problem — not just the part that's surfaced.\n\nQuest Pest Control offers free pest inspections for Queens homes, apartments, and multi-family properties. Our licensed technicians conduct a methodical examination of your unit or property: appliance gaps and motor housings (a prime German cockroach harborage in Queens kitchens), plumbing penetrations and under-sink areas, mattress and furniture surfaces and joints, basement and ground-floor access points for rodent entry, and visible wall and baseboard areas for signs of pest travel and harborage.\n\nFor property managers in Queens, our free inspection services also cover building common areas — laundry rooms, boiler rooms, garbage areas, and basement corridors where pest populations often originate before spreading to individual units. Our inspection report provides a clear, actionable picture of the building's current pest status and the steps needed to bring it into compliance. Call to schedule your free Queens pest inspection — no obligation, no pressure, just accurate information you can use.`,
    towns: ['Flushing', 'Jamaica', 'Astoria', 'Forest Hills', 'Jackson Heights', 'Howard Beach', 'Ridgewood', 'Bayside'],
    faqs: [
      {
        q: 'What does a free pest inspection in Queens cover?',
        a: 'Our Queens inspection covers kitchen and bathroom areas (cockroach harborage), bedroom and upholstered furniture (bed bug inspection), basement and entry points (rodent inspection), and common areas for multi-unit buildings. We report on current pests, evidence of past activity, and conducive conditions.',
      },
      {
        q: 'Can I get a free pest inspection for my Queens apartment if I\'m a renter?',
        a: 'Yes. We inspect individual apartments for both tenants and landlords. If you\'re a tenant dealing with a pest problem your landlord hasn\'t addressed, our inspection report provides documentation useful for HPD complaints and lease negotiations.',
      },
      {
        q: 'Do you inspect for bed bugs specifically in Queens apartments?',
        a: 'Yes. Bed bug inspection is included in our free inspection. Our technicians are trained to identify bed bug evidence in all primary harborage sites — not just obvious mattress surfaces, but furniture joints, baseboards, outlets, and curtain rods.',
      },
      {
        q: 'How quickly can you schedule a free pest inspection in Queens?',
        a: 'We typically schedule Queens inspections within 24–48 hours of your call. For urgent situations — such as a bed bug discovery before a tenant moves in, or a pest complaint ahead of a housing inspection — call us directly and we\'ll prioritize scheduling.',
      },
    ],
    urgencyText: 'Get your free Queens pest inspection this week — call now to schedule.',
  },
];

export function getLeadCapturePage(region: string, intent: string): LeadCapturePage | undefined {
  return leadCapturePages.find(p => p.region === region && p.intent === intent);
}

export const LEAD_CAPTURE_REGIONS = ['suffolk', 'nassau', 'queens'] as const;
export const LEAD_CAPTURE_INTENT_SLUGS = [
  'pest-control-near-me',
  'exterminator-near-me',
  'emergency-pest-control',
  'same-day-pest-control',
  'bed-bug-exterminator',
  'free-pest-inspection',
] as const;
