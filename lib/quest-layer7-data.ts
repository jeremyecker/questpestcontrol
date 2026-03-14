// Quest Pest Control — Layer 7 City Enrichment Data
// City-specific FAQs, curated nearby towns, and neighborhood highlights

// ─── City-Specific FAQs ──────────────────────────────────────────────────────
export const questCityFaqs: Record<string, { q: string; a: string }[]> = {

  // ── SUFFOLK HUBS ──────────────────────────────────────────────────────────

  'huntington': [
    { q: "What pests are most active in Huntington's wooded neighborhoods?", a: "Huntington's North Shore character — large wooded lots, Victorian-era homes in the village, and proximity to Cold Spring Harbor — creates significant pressure from deer ticks, eastern subterranean termites, and carpenter ants. Deer tick activity runs from March through November, and termite swarms typically appear in April and May near the harbor area." },
    { q: "Do you serve Huntington Village and surrounding hamlets?", a: "Yes — Quest Pest Control covers all of Huntington town, including Huntington Village, Centerport, Greenlawn, Cold Spring Harbor, Lloyd Neck, Halesite, and every hamlet in between. Call (631) 228-4498 for same-day dispatch." },
    { q: "Are older homes in Huntington more vulnerable to termite damage?", a: "Absolutely. Many Huntington Village homes date to the 1800s and early 1900s, featuring the wood framing, crawl spaces, and basement sill plates that eastern subterranean termites target. Annual termite inspections and bait station monitoring are strongly recommended for any home over 40 years old in this area." },
    { q: "How does Huntington's waterfront proximity affect pest activity?", a: "Proximity to Huntington Harbor and Cold Spring Harbor creates moisture gradients that attract moisture-loving pests year-round. Expect elevated activity from moisture ants, springtails, and occasional millipede invasions following heavy rains. Basement waterproofing combined with targeted perimeter treatment provides the best long-term protection." },
  ],

  'babylon': [
    { q: "What pest pressures affect Babylon's South Shore communities?", a: "Babylon's position along the Great South Bay makes waterfront and near-waterfront properties particularly vulnerable to moisture pests. Mosquitoes breed in the tidal wetlands bordering many neighborhoods, and the damp conditions near the bay support carpenter ant and subterranean termite colonies. Rodents are also active near marinas and commercial waterfront areas." },
    { q: "Do you cover Babylon Village, West Babylon, and North Babylon separately?", a: "Yes — Quest Pest serves the entire Town of Babylon, including the Village of Babylon, West Babylon, North Babylon, Lindenhurst, Amityville, Copiague, and Wyandanch. Each area has its own pest profile and we tailor treatment accordingly." },
    { q: "Are mosquitoes a major problem along the Babylon waterfront?", a: "Mosquito pressure in Babylon is significant from late May through September. Tidal wetlands, stormwater retention basins, and decorative ponds near Great South Bay are primary breeding sources. Our seasonal mosquito barrier program targets adult harborage areas and interrupts breeding cycles for meaningful reduction in outdoor exposure." },
    { q: "How do you handle rats and mice near Babylon's commercial areas?", a: "Commercial corridors and restaurant districts near Babylon Village and Sunrise Highway attract rat populations year-round. Our rodent program combines tamper-resistant exterior bait stations, thorough interior inspection, and exclusion work to seal gaps in foundations, utility penetrations, and door sweeps — stopping rodents at the entry point." },
  ],

  'smithtown': [
    { q: "What are the top pest concerns in Smithtown's suburban neighborhoods?", a: "Smithtown's mix of mid-century ranch homes and newer developments on wooded lots creates high activity from subterranean termites, carpenter ants, and deer ticks. The Nissequogue River corridor and surrounding greenbelts push tick populations into residential backyards throughout spring and fall." },
    { q: "Do you treat tick infestations in Smithtown's wooded properties?", a: "Yes. The Nissequogue River valley and Kings Park bluffs generate consistent deer tick pressure that extends into Smithtown neighborhoods. We offer outdoor barrier treatments April through October — targeting leaf litter edges, shrub borders, and the grass-to-woods transition zones where ticks concentrate." },
    { q: "Are termites common in Smithtown homes?", a: "Eastern subterranean termites are well-established throughout Smithtown. Homes along tree-lined streets and those with wood-to-soil contact, mulched foundations, or crawl spaces face the highest risk. Spring swarms (April–May) are the most visible sign — if you see winged termites indoors, call us immediately." },
    { q: "How quickly can Quest Pest respond in Smithtown?", a: "Quest Pest typically responds same-day or next morning to service requests in Smithtown. Call (631) 228-4498 and we'll dispatch the closest available technician to your location." },
  ],

  'islip': [
    { q: "What pest issues are common in the Town of Islip?", a: "The Town of Islip spans from Great South Bay to the Long Island Expressway, giving it a wide range of pest pressures. Waterfront communities like Bay Shore and Islip itself face mosquitoes and moisture pests, while inland areas like Central Islip and Ronkonkoma deal more with termites, ants, and rodents in suburban developments." },
    { q: "Do you serve all Islip communities including Bay Shore and East Islip?", a: "Yes — Quest Pest covers all communities within the Town of Islip: Bay Shore, East Islip, West Islip, Islip Terrace, Brightwaters, Great River, Oakdale, and every hamlet and neighborhood. One call handles your entire area." },
    { q: "Are there mosquito problems near the Great South Bay waterfront in Islip?", a: "Mosquito activity is elevated in all Great South Bay communities from late May through September. Tidal wetlands, boat basin areas, and backyard water features are primary breeding sites. Our seasonal barrier spray program significantly reduces mosquito pressure around decks, patios, and outdoor living areas." },
    { q: "Do older homes in Islip require more frequent pest inspections?", a: "Homes built before 1970 — common throughout Islip's established neighborhoods — carry higher termite risk due to original wood construction, pier-and-beam foundations, and older utility penetrations that provide easy pest entry. Annual inspections and monitoring programs give you early detection before damage escalates." },
  ],

  'hauppauge': [
    { q: "What pests affect office parks and industrial facilities in Hauppauge?", a: "Hauppauge Industrial Park — one of the largest in the US — has unique pest challenges compared to residential areas. Warehouses and light manufacturing facilities deal with rodents accessing loading docks, German cockroaches in break rooms and cafeterias, and bird pressure on rooftops. Quest Pest provides Integrated Pest Management (IPM) programs for commercial and industrial facilities." },
    { q: "Do residential neighborhoods in Hauppauge have pest issues?", a: "Yes — the residential areas of Hauppauge and neighboring Commack and Nesconset have standard suburban pest pressure: subterranean termites in older homes, carpenter ants in wooded properties, and seasonal rodent pressure each fall. The greenway along the Nissequogue River headwaters also contributes to tick activity." },
    { q: "Can Quest Pest handle IPM programs for Hauppauge Industrial Park tenants?", a: "Absolutely. We service commercial and industrial accounts throughout Hauppauge Industrial Park. Our IPM approach documents pest activity, uses targeted treatments rather than broad pesticide applications, and provides compliance documentation for food-adjacent and pharmaceutical tenants." },
    { q: "How quickly can you respond to a commercial pest call in Hauppauge?", a: "For commercial accounts in Hauppauge, Quest Pest offers same-day emergency response for active infestations. Regular scheduled service contracts include priority dispatch. Call (631) 228-4498 or contact us through our website for a commercial quote." },
  ],

  'ronkonkoma': [
    { q: "What pest problems are common near Lake Ronkonkoma?", a: "Lake Ronkonkoma's shoreline properties face elevated mosquito activity from late May through September, as the lake and its drainage channels provide extensive breeding habitat. The older homes ringing the lake also have high termite and carpenter ant pressure due to aging wood structures and moisture exposure." },
    { q: "Do you serve communities around MacArthur Airport?", a: "Yes — Quest Pest covers all of Ronkonkoma and neighboring communities including Lake Ronkonkoma, Holbrook, Lakeland, and the commercial corridors near MacArthur Airport. We handle both residential and commercial accounts." },
    { q: "Are rodents a problem in Ronkonkoma's older residential areas?", a: "Rodent pressure increases each fall throughout Ronkonkoma's established neighborhoods. Older homes with concrete block foundations and deteriorating sill plates provide easy entry for mice. Our exclusion-focused rodent program seals entry points and eliminates active populations — not just traps rodents temporarily." },
    { q: "What's the best time to schedule a termite inspection in Ronkonkoma?", a: "Spring (March through May) is ideal, as termite swarm season peaks in April and May in Suffolk County. However, we recommend annual inspections year-round — termite damage is ongoing regardless of season. Schedule online or call (631) 228-4498." },
  ],

  'patchogue': [
    { q: "What pests are common in Patchogue Village's historic downtown?", a: "Patchogue's revitalized downtown corridor — with its mix of restaurants, apartments, and historic storefronts — faces German cockroach pressure in food service establishments, rodents in utility corridors, and bed bugs spreading through adjacent residential buildings. The waterfront location also drives mosquito activity from Fire Island Inlet drainage." },
    { q: "Does Patchogue's waterfront create unusual pest pressures?", a: "Yes. Patchogue's South Street waterfront and Patchogue River estuary contribute to elevated mosquito breeding from Memorial Day through Labor Day. Waterfront and near-waterfront properties also experience higher moisture ant and centipede activity due to persistent ground moisture." },
    { q: "Do you serve Blue Point, East Patchogue, and North Patchogue?", a: "Quest Pest covers all Patchogue communities: Patchogue Village, Blue Point, East Patchogue, North Patchogue, Medford, and surrounding hamlets. Call (631) 228-4498 for same-day service." },
    { q: "How do you handle restaurant pest control in Patchogue's dining district?", a: "We provide commercial IPM programs specifically designed for food service establishments — meeting New York State Health Department requirements, using low-toxicity products in kitchen environments, and providing inspection documentation. Patchogue's growing restaurant scene demands proactive pest management." },
  ],

  'bay-shore': [
    { q: "What pest issues affect Bay Shore's South Shore neighborhoods?", a: "Bay Shore sits directly on the Great South Bay, creating year-round moisture conditions that support mosquitoes, carpenter ants, and subterranean termites in waterfront and near-waterfront homes. The Fire Island ferry terminals and marinas also attract rodents that spread into adjacent residential streets." },
    { q: "Are mosquitoes a major concern near the Bay Shore waterfront?", a: "Mosquito pressure in Bay Shore is among the highest in Suffolk County during summer months. Tidal wetlands along the bay and numerous backyard water features create extensive breeding habitat. Our seasonal barrier treatment program dramatically reduces mosquito populations around your outdoor living spaces." },
    { q: "Do you serve the areas around Fire Island ferry terminals?", a: "Yes — we cover all of Bay Shore including the main street commercial corridor and the residential streets surrounding the ferry terminals. Commercial accounts near the waterfront receive priority scheduling given the elevated rodent pressure in these areas." },
    { q: "What seasonal pests should Bay Shore homeowners watch for?", a: "Spring brings termite swarms and carpenter ant activity. Summer intensifies mosquito and tick pressure. Fall triggers mouse invasions as temperatures drop. Winter is ideal for rodent exclusion work and termite pre-treatment on new construction. Quest Pest offers year-round protection plans covering all seasons." },
  ],

  'northport': [
    { q: "What pests are common in Northport's North Shore waterfront community?", a: "Northport Village's Victorian homes, wooded bluffs, and harbor proximity create a high-risk environment for carpenter ants and subterranean termites in aging wood structures. Deer ticks are active in the wooded areas along the Northport Harbor bluff and throughout the wooded neighborhoods surrounding the village." },
    { q: "Are older Victorian homes in Northport Village more susceptible to termites?", a: "Yes. Many Northport Village homes date to the late 1800s and early 1900s, with original wood framing, subfloor timbers, and basement sill plates exposed to moisture from harbor proximity. These conditions are ideal for eastern subterranean termite colonies. We recommend annual inspections for any Northport home over 50 years old." },
    { q: "Does deer tick activity extend into Northport neighborhoods?", a: "Significantly. Northport's wooded bluff neighborhoods bordering the harbor and Veterans Memorial Park have high deer tick populations from March through November. Our tick barrier treatment targets the leaf-litter zones, shrub edges, and woodland borders where deer ticks concentrate." },
    { q: "How quickly can Quest Pest respond in Northport?", a: "Quest Pest offers same-day or next-morning service in Northport. We cover the full area from Northport Village to Asharoken Beach and the surrounding hamlet. Call (631) 228-4498." },
  ],

  'port-jefferson': [
    { q: "What pest pressures exist in Port Jefferson's harbor community?", a: "Port Jefferson's active harbor, ferry terminal to Bridgeport, and dense mix of restaurants, shops, and historic homes creates diverse pest pressure. Rodents are attracted to the waterfront commercial area year-round, while the wooded bluffs above the harbor drive tick and carpenter ant activity into residential neighborhoods." },
    { q: "Do you treat older homes in Port Jefferson Village?", a: "Yes — Port Jefferson Village's historic homes dating to the 1800s have significant termite and carpenter ant risk due to aging wood framing and crawl spaces. We offer targeted liquid termiticide applications, bait station monitoring, and annual inspection programs for heritage properties." },
    { q: "Are ticks a problem in Port Jefferson's wooded neighborhoods?", a: "The wooded bluffs above Port Jefferson Harbor and the parks surrounding Port Jefferson Station have substantial deer tick populations. Tick pressure is active March through November, with peak exposure in spring and fall. Outdoor barrier treatments protect yard perimeters during the highest-risk periods." },
    { q: "Does Quest Pest serve Port Jefferson Station as well as the Village?", a: "Yes — we serve all of Port Jefferson and Port Jefferson Station, as well as neighboring Belle Terre, Terryville, and Mount Sinai. One call at (631) 228-4498 covers your entire area." },
  ],

  'brentwood': [
    { q: "What are the main pest challenges in Brentwood's dense residential neighborhoods?", a: "Brentwood's high-density residential character — with tightly spaced homes, shared fencing, and mature urban tree canopy — creates conditions where pests spread quickly between properties. German cockroaches, bed bugs, and rodents are the primary concerns, while carpenter ants are prevalent in homes along wooded corridors." },
    { q: "Do you handle multi-unit residential pest control in Brentwood?", a: "Yes — Quest Pest has extensive experience servicing multi-family homes, two-family houses, and apartment buildings in Brentwood. We work with landlords and property managers to coordinate unit-by-unit treatment and provide documentation for housing compliance." },
    { q: "Are rodents a major issue in Brentwood neighborhoods?", a: "Rodent pressure in Brentwood is ongoing, driven by dense housing, commercial corridors, and alleyway access between properties. Our rodent program combines interior and exterior bait stations, thorough inspection, and physical exclusion to seal the gaps mice use to enter homes." },
    { q: "How do I know if I have bed bugs vs. another biting pest in Brentwood?", a: "Bed bug bites often appear in clusters or lines on exposed skin, and you may notice small blood stains or dark fecal spots on mattress seams. However, only a professional inspection can confirm the pest. Quest Pest offers K-9 inspection for definitive bed bug detection — call (631) 228-4498." },
  ],

  'central-islip': [
    { q: "What pest issues are common in Central Islip residential areas?", a: "Central Islip's mix of established neighborhoods and newer developments presents diverse pest pressure. Rodents are active near the Long Island Rail Road corridor and commercial areas along Carleton Avenue, while termites and carpenter ants affect older homes with mature tree cover. Bed bugs are a recurring concern in multi-family housing." },
    { q: "Do you serve Central Islip's newer housing developments?", a: "Yes — newer construction in Central Islip is not immune to pests. Builder-grade construction often leaves gaps around utility penetrations, and termites will attack newer homes just as readily. We offer both new construction pre-treatments and ongoing protection for established homes." },
    { q: "Are German cockroaches a problem in Central Islip apartments?", a: "German cockroach infestations are common in multi-unit housing throughout Central Islip. They spread through shared walls, plumbing chases, and utility corridors. Effective elimination requires treating multiple units simultaneously — individual unit treatments alone rarely eliminate the source colony." },
    { q: "How quickly can Quest Pest respond to an emergency in Central Islip?", a: "Quest Pest provides same-day emergency service throughout Central Islip. For active rodent intrusions, bed bug discoveries, or wasp nest emergencies, call (631) 228-4498 and we'll dispatch immediately." },
  ],

  'commack': [
    { q: "What pests are most common in Commack's suburban split-levels and Colonials?", a: "Commack's 1960s–1980s suburban housing stock — primarily split-level and Colonial-style homes on quarter-acre lots — sees regular activity from carpenter ants nesting in moisture-damaged wood, subterranean termites in soil adjacent to wood siding, and annual fall mouse invasions through gaps in older foundations." },
    { q: "Is tick activity elevated in Commack due to Hoyt Farm proximity?", a: "Yes — Hoyt Farm Nature Preserve and the green corridors threading through Commack neighborhoods sustain deer populations that carry black-legged ticks into residential backyards. Tick activity is highest from April through June and again in September and October." },
    { q: "Do you offer termite pre-treatment for home additions in Commack?", a: "Absolutely. Pre-construction termite treatment creates a protective soil barrier before concrete is poured or framing begins — far more effective than treating an existing structure. We coordinate directly with your contractor to schedule treatment at the appropriate construction stage." },
    { q: "How do you treat carpenter ants in Commack without disrupting landscaping?", a: "Our carpenter ant treatment targets the colony source — typically in moisture-damaged wood inside walls, under decks, or in wood piles — rather than just spraying surfaces. We use targeted gel baits and low-impact perimeter products that protect your landscaping while eliminating the nest." },
  ],

  'east-hampton': [
    { q: "What pest challenges come with East Hampton's estate properties and ocean proximity?", a: "East Hampton's estate-scale properties with extensive wooded acreage, manicured lawns bordering natural areas, and proximity to the Atlantic Ocean create intense deer tick pressure, significant mosquito breeding in decorative ponds and drainage areas, and occasional oriental cockroach activity in pool houses and outbuildings." },
    { q: "Are deer ticks a serious concern on East Hampton estates?", a: "Deer tick pressure in East Hampton is among the highest in New York State due to large deer populations traversing estate properties. Our tick barrier program targets the wooded edges and ornamental shrub borders where ticks concentrate, providing meaningful protection for families and guests during outdoor activities." },
    { q: "Do you offer discreet service for East Hampton's luxury properties?", a: "Yes — Quest Pest understands the expectations of East Hampton homeowners. We operate in unmarked vehicles on request, schedule service around your events and rental periods, and provide documentation for property managers overseeing estate maintenance." },
    { q: "What about mosquito control for East Hampton outdoor events and pools?", a: "We offer event-timed mosquito treatments — applied 24–48 hours before outdoor events — that dramatically reduce adult mosquito populations around pool areas, terraces, and garden spaces. Seasonal barrier programs maintain ongoing protection throughout the summer season." },
  ],

  'southampton': [
    { q: "What are the unique pest concerns for Southampton's oceanfront and estate properties?", a: "Southampton's oceanfront homes face sand flea and occasional sand fly pressure during summer months, while estate properties with extensive naturalized areas deal with deer ticks, mosquitoes breeding in ornamental water features, and carpenter ants in weathered outbuildings and guest cottages." },
    { q: "Are ticks a major concern in Southampton's horse country and wooded estates?", a: "Extremely so. Southampton Township's extensive agricultural and equestrian properties provide ideal habitat for deer tick populations that spread into neighboring residential areas. Lone star ticks — increasingly common in eastern Long Island — are also present and carry their own disease risks." },
    { q: "Do you provide seasonal programs for Southampton second homes?", a: "Yes — we offer seasonal startup programs for homes that are closed for winter and reopened in spring. These include inspection, treatment, and establishment of monitoring systems before the summer season begins. We coordinate with property managers and caretakers directly." },
    { q: "Can you handle pest control for large Southampton rental properties?", a: "Absolutely. Quest Pest works with rental property managers throughout Southampton to schedule treatments between guest periods, maintain documentation, and respond quickly to any pest concerns raised by guests or property managers. Call (631) 228-4498 for commercial and property management accounts." },
  ],

  'riverhead': [
    { q: "What pests are common in Riverhead's mix of urban, agricultural, and waterfront areas?", a: "Riverhead's unique character as a county seat with agricultural land, a revitalized downtown, and Peconic Bay waterfront creates diverse pest pressures. Rodents are active in commercial and agricultural areas, mosquitoes breed extensively near the Peconic River and bay marshes, and stink bugs are a significant agricultural pest that migrates into homes each fall." },
    { q: "Are stink bugs particularly bad in Riverhead's agricultural areas?", a: "Yes — brown marmorated stink bugs are more prevalent in Riverhead than in western Suffolk due to the adjacent agricultural land and vegetable fields in Aquebogue and Calverton. They mass-migrate into homes in September and October seeking overwintering sites. Exterior perimeter treatment in late August reduces invasion pressure significantly." },
    { q: "Does Riverhead's Peconic River proximity affect pest activity?", a: "Significantly. The Peconic River floodplain and Riverhead's riverside park areas create substantial mosquito breeding habitat from June through September. Waterfront commercial and residential properties see the highest mosquito pressure, and our seasonal barrier program is particularly effective for these locations." },
    { q: "Do you serve Riverhead Town as well as Aquebogue and Calverton?", a: "Yes — Quest Pest covers all of Riverhead Town including Riverhead Village, Aquebogue, Calverton, Wading River, and the North Fork corridor. Call (631) 228-4498 for residential and commercial service." },
  ],

  'montauk': [
    { q: "What pest challenges are unique to Montauk's oceanfront community?", a: "Montauk's position at the tip of the South Fork, surrounded by ocean and Peconic Bay, creates intense deer tick pressure from the large deer population in Montauk State Park, elevated mosquito activity near freshwater ponds and marshes, and occasional American cockroach intrusions in older commercial buildings near the fishing docks." },
    { q: "Are deer ticks especially bad in Montauk's park and wooded areas?", a: "Montauk Point State Park and the surrounding preserved lands sustain very high deer densities, making deer tick exposure in Montauk significantly higher than most of Long Island. Both black-legged ticks (Lyme disease) and lone star ticks are active. Protective clothing and regular tick checks are essential for anyone spending time outdoors." },
    { q: "Do you offer seasonal service for Montauk seasonal homes?", a: "Yes — we specialize in seasonal programs for Montauk's significant second-home community. Spring startup inspections, summer barrier programs for mosquitoes and ticks, and fall rodent exclusion before winter closure are all available. We coordinate with property managers and caretakers directly." },
    { q: "How do you handle pest control for Montauk's restaurant and hospitality businesses?", a: "Quest Pest provides commercial IPM programs for restaurants, hotels, and rental properties in Montauk. We meet New York State Health Department inspection requirements, use low-impact products appropriate for coastal environments, and provide emergency same-day response for any active pest issue." },
  ],

  'melville': [
    { q: "What pest pressures affect Melville's corporate parks and executive homes?", a: "Melville's status as a major corporate hub — with office parks along Route 110 — brings rodent pressure to food service areas, loading docks, and parking garages. Residential Melville, with its large wooded lots and older homes, faces subterranean termite and carpenter ant pressure, particularly near the greenbelt areas along Bethpage State Park's edge." },
    { q: "Do wooded Melville neighborhoods have tick problems?", a: "Yes — Melville's large-lot residential areas bordering Bethpage State Park and Half Hollow Hills have active deer tick populations from spring through fall. The combination of large manicured lawns adjacent to natural wooded edges is exactly the tick habitat we target with our outdoor barrier program." },
    { q: "Can you handle commercial pest control for Melville office parks?", a: "Absolutely. Quest Pest serves commercial accounts throughout Route 110 and the Melville corporate corridor. We provide IPM programs with service documentation, after-hours scheduling for tenant-occupied buildings, and emergency response for rodent or insect emergencies." },
    { q: "Are there seasonal pest patterns in Melville homeowners should know about?", a: "Carpenter ant activity peaks in spring (March–May), termite swarms appear April through May, tick season runs March through November, and mice enter homes September through November. Quest Pest's year-round protection plan covers all seasonal pressures with proactive treatments before each peak period." },
  ],

  'deer-park': [
    { q: "What pests are common in Deer Park's established neighborhoods?", a: "Deer Park's 1960s–1970s housing stock — primarily Cape Cods and ranch homes — sees consistent pressure from eastern subterranean termites in aging sill plates, carpenter ants nesting in exterior wood trim and decks, and annual fall mouse invasions through gaps that develop in older foundations and utility penetrations." },
    { q: "Are there tick concerns near Deer Park's green spaces and preserves?", a: "Yes — Bethpage State Park borders Deer Park to the south, and deer movement from the park into residential neighborhoods brings tick exposure. Properties along the park boundary and on wooded streets have higher tick risk from March through November." },
    { q: "Do you treat wasp and yellowjacket nests in Deer Park?", a: "Yes — yellowjackets nesting in ground cavities, wall voids, and eaves are a summer hazard in Deer Park's suburban landscapes. We treat nests quickly and remove them where accessible. Same-day service is available for active nests near high-traffic areas." },
    { q: "How do I prevent mice from entering my Deer Park home each fall?", a: "Prevention is the most effective strategy. We inspect your foundation, utility penetrations, door and window gaps, and roof line for entry points, then seal them using copper mesh, expanding foam, and weatherstripping. This exclusion work, combined with exterior bait stations, keeps mice out rather than just trapping them inside." },
  ],

  'lindenhurst': [
    { q: "What pest issues affect Lindenhurst's canal communities and South Shore neighborhoods?", a: "Lindenhurst's extensive canal system — one of the largest on Long Island's South Shore — creates significant mosquito breeding habitat that intensifies from June through September. Waterfront properties also face carpenter ant and moisture ant pressure due to damp soil conditions around bulkheads and boat docks." },
    { q: "Are mosquitoes especially bad in Lindenhurst's canal neighborhoods?", a: "Mosquito pressure in Lindenhurst's canal communities is elevated throughout summer. The canal system's varied water circulation creates mosquito breeding zones that affect entire neighborhoods. Our barrier treatment program targets adult resting areas in ornamental shrubs and shaded vegetation — reducing populations at the source." },
    { q: "Do you treat for rodents in Lindenhurst near the South Shore canals?", a: "Rodents — particularly Norway rats — are active in Lindenhurst's bulkhead and dock areas year-round. They tunnel under concrete slabs and access homes through gaps near utility lines and dryer vents. Our rodent program addresses both exclusion and active population control." },
    { q: "How quickly can you respond in Lindenhurst?", a: "Quest Pest offers same-day service in Lindenhurst for both residential and commercial accounts. Call (631) 228-4498 and we'll have a technician at your location the same day or next morning." },
  ],

  // ── NASSAU HUBS ───────────────────────────────────────────────────────────

  'garden-city': [
    { q: "What pest pressures exist in Garden City's elegant planned community?", a: "Garden City's early-20th-century planned community — with its iconic elm-lined streets, large Tudor and Colonial homes, and manicured parks — carries significant subterranean termite risk in aging wood structures. Carpenter ants nest in mature street trees and spread to adjacent homes, and deer ticks have been increasing with deer movement from nearby Nassau County preserves." },
    { q: "Are historic Garden City homes more vulnerable to termites?", a: "Yes. Many of Garden City's most distinguished homes date to the 1920s–1950s, with original wood framing, basement timbers, and plaster construction that provides termites both access and food. Annual termite inspections and bait station monitoring are essential for any home over 50 years old in this community." },
    { q: "Do you provide discreet pest control for Garden City's upscale neighborhoods?", a: "Absolutely. Quest Pest operates discreetly throughout Garden City, using unmarked vehicles on request and scheduling service during convenient windows. We understand the expectations of Garden City homeowners and provide premium service with minimal disruption." },
    { q: "Are there specific pest concerns near Garden City's parks and golf courses?", a: "Golf courses and large park areas adjacent to residential properties attract deer, which carry ticks into neighboring yards. Tick exposure in Garden City has increased over the past decade as deer populations expanded. Our outdoor tick barrier program protects your yard perimeter throughout the active season." },
  ],

  'hempstead': [
    { q: "What are the main pest concerns in Hempstead Village?", a: "Hempstead Village's urban density, older housing stock, and commercial activity create persistent pressure from German cockroaches in food service establishments, rodents in utility corridors and commercial waste areas, and bed bugs in multi-unit residential buildings. The older housing throughout the village also carries subterranean termite risk." },
    { q: "Do you handle multi-family and apartment pest control in Hempstead?", a: "Yes — Quest Pest has extensive experience in Hempstead's multi-family housing market. We work with property managers and landlords to coordinate unit-by-unit treatment, address common areas, and provide documentation required for housing compliance and Nassau County health inspections." },
    { q: "How do you handle rodent problems in Hempstead's commercial areas?", a: "Rodent control in dense commercial areas requires a systematic approach: exterior tamper-resistant bait stations, interior monitoring, identification of harborage areas, and exclusion work to seal entry points. We also coordinate with neighboring property owners when shared infrastructure is a contributing factor." },
    { q: "Are bed bugs a significant issue in Hempstead rental properties?", a: "Bed bugs spread rapidly through multi-unit buildings via shared walls and plumbing chases. In rental properties, tenant turnover increases exposure risk. Quest Pest offers K-9 detection for accurate identification, heat treatment for complete elimination, and preventive inspections between tenancies." },
  ],

  'levittown': [
    { q: "What pests are common in Levittown's iconic Levitt-built homes?", a: "Levittown's original 1947–1951 Levitt construction — cape cod style homes with slab-on-grade foundations, expansion attics, and standardized wood framing — has specific pest vulnerabilities. Eastern subterranean termites target the sill plates and expansion attic framing, carpenter ants nest in older exterior sheathing, and mice enter through aging utility penetrations." },
    { q: "Are Levittown's original Levitt homes at elevated termite risk?", a: "Yes. The original construction used wood in direct contact with the soil in some areas, and over 70 years the perimeter caulking and sill plate protection have deteriorated. Annual termite inspections are particularly important for Levittown's original housing stock. We recommend a bait station monitoring program as a first line of defense." },
    { q: "Do you treat ant infestations in Levittown's basement-free homes?", a: "Levittown's slab-on-grade construction means carpenter ants and pavement ants enter through cracks in the slab, expansion joints, and utility penetrations rather than through basements. We target interior wall voids and exterior perimeter areas where ant trails concentrate." },
    { q: "How quickly can Quest Pest respond in Levittown?", a: "Quest Pest provides same-day or next-morning service throughout Levittown. Our Nassau County coverage is comprehensive — call (631) 228-4498 and we'll dispatch quickly." },
  ],

  'great-neck': [
    { q: "What pest pressures affect Great Neck's affluent North Shore communities?", a: "Great Neck's prestigious neighborhoods — from Kings Point estates to the mid-rise apartments near the LIRR station — present diverse pest challenges. Estate properties face deer tick exposure, carpenter ant activity in mature trees, and subterranean termites in large older homes. The denser neighborhoods near Great Neck Plaza deal with rodents, bed bugs in apartment buildings, and cockroaches near restaurant corridors." },
    { q: "Are Great Neck's waterfront estate properties at high tick risk?", a: "Great Neck Peninsula extends into Little Neck Bay and Manhasset Bay, with significant wooded areas and deer movement through estate properties. Deer tick exposure is elevated throughout Great Neck's wooded and waterfront neighborhoods from March through November. Our outdoor barrier program provides meaningful season-long protection." },
    { q: "Do you handle pest control for Great Neck's apartment buildings and co-ops?", a: "Yes — Quest Pest serves residential buildings, co-ops, and condominiums throughout Great Neck. We work with building management to schedule discreet service, coordinate multi-unit treatments when needed, and provide documentation for building management records." },
    { q: "Are there particular pest concerns near Great Neck Plaza's restaurant district?", a: "Great Neck Plaza's thriving restaurant scene creates conditions where rodents and cockroaches concentrate. Commercial accounts receive IPM programs that meet Nassau County Health Department standards, use low-impact products in food preparation areas, and include emergency response for active pest situations." },
  ],

  'freeport': [
    { q: "What pest issues affect Freeport's nautical mile and waterfront community?", a: "Freeport's famous Nautical Mile — with its seafood restaurants, marinas, and fish markets — creates significant rodent pressure along the waterfront year-round. The adjacent residential neighborhoods deal with mosquitoes from tidal wetlands, carpenter ants in older homes near the bay, and periodic German cockroach activity spreading from commercial areas." },
    { q: "Are mosquitoes especially bad near Freeport's South Shore waterfront?", a: "Yes — Freeport's position on Freeport Creek and the surrounding South Shore marshes creates intense mosquito breeding conditions from late May through September. Homes within a few blocks of the water experience the highest mosquito pressure. Our barrier treatment program provides meaningful relief for outdoor living areas." },
    { q: "Do you handle commercial pest control for Nautical Mile restaurants?", a: "Absolutely. Quest Pest provides commercial IPM for Freeport's Nautical Mile restaurants and fish markets. We understand the specific challenges of high-volume food service — quick treatment turnaround, low-odor products, and health department compliant documentation." },
    { q: "What rodent prevention measures work best in Freeport's waterfront neighborhoods?", a: "Norway rats are endemic to waterfront areas like Freeport's marina and creek corridors. Effective control requires exterior bait station networks around building perimeters, exclusion of foundation gaps and utility penetrations, and proper waste management in commercial areas. We address all three components in our commercial rodent program." },
  ],

  'massapequa': [
    { q: "What pests are common in Massapequa's South Shore suburban neighborhoods?", a: "Massapequa's established 1950s–1960s neighborhoods, bordered by Mill River and the South Shore wetlands, face elevated mosquito activity each summer and regular termite and carpenter ant pressure in aging homes. The Massapequa Preserve creates a natural wildlife corridor that brings deer ticks into nearby residential properties." },
    { q: "Does Massapequa Preserve affect pest activity in nearby neighborhoods?", a: "Significantly. The Massapequa Preserve's deer population carries black-legged ticks into the surrounding neighborhoods, particularly along the preserve edge. Homes within a quarter mile of the preserve boundary have noticeably higher tick exposure from March through November." },
    { q: "Are mosquitoes elevated near Massapequa's wetlands and ponds?", a: "Yes — Massapequa Lake, Carman's Mill Pond, and the wetland areas near Mill River provide substantial mosquito breeding habitat each summer. Our seasonal barrier program targets adult mosquitoes in ornamental shrubs and wooded areas around your property — significantly reducing outdoor exposure." },
    { q: "Do you serve Massapequa Park and Seaford as well?", a: "Yes — Quest Pest covers all communities in this area: Massapequa, Massapequa Park, Seaford, East Massapequa, and Old Bethpage. Call (631) 228-4498 for same-day service." },
  ],

  'long-beach': [
    { q: "What are the unique pest challenges for Long Beach as a barrier island city?", a: "Long Beach's barrier island location — ocean on one side, Reynolds Channel on the other — creates unique pest pressures. Salt marsh mosquitoes are active from June through September, moisture conditions in the sandy soil accelerate wood decay and create carpenter ant nesting habitat, and German cockroaches thrive in the city's dense apartment building stock." },
    { q: "Are salt marsh mosquitoes a major problem in Long Beach?", a: "Salt marsh mosquitoes from Reynolds Channel and the South Shore bays can be significant in Long Beach from June through early September. Unlike freshwater mosquitoes, salt marsh species are strong fliers that can travel long distances from breeding sites. Our barrier treatment targets harborage areas on your property and reduces exposure during outdoor activities." },
    { q: "Do Long Beach apartment buildings have bed bug problems?", a: "Bed bugs are a persistent concern in Long Beach's dense apartment housing, particularly in buildings with high tenant turnover. They spread through walls, electrical outlets, and shared laundry facilities. Quest Pest offers K-9 detection, heat treatment, and inter-unit treatment coordination for multi-family buildings." },
    { q: "Does Long Beach's ocean environment affect pest treatment approaches?", a: "Yes — we use low-impact, coastal-environment-appropriate products in Long Beach that won't affect adjacent marine areas. Our IPM approach minimizes environmental impact while maintaining effectiveness. We're experienced with Nassau County's coastal treatment requirements." },
  ],

  'valley-stream': [
    { q: "What pest concerns are most common in Valley Stream's suburban neighborhoods?", a: "Valley Stream's dense Nassau County suburban character — with closely spaced homes, mature landscaping, and active commercial corridors — drives regular activity from German cockroaches in commercial areas, rodents along the LIRR corridor and in basement utility areas, and occasional bed bug spread in multi-unit housing near the village center." },
    { q: "Are there specific pest pressures near Valley Stream's Green Acres Mall area?", a: "Large commercial complexes like Green Acres attract rodent populations year-round, and neighboring residential properties can experience increased mouse pressure each fall as commercial dumpster areas lose food sources. Our residential rodent program in Valley Stream includes exterior bait stations and exclusion work on home foundations." },
    { q: "Do you handle pest control for Valley Stream's apartment buildings and rentals?", a: "Yes — Quest Pest serves multi-family properties throughout Valley Stream. We work with property managers to schedule treatment, coordinate multi-unit bed bug programs when needed, and provide inspection documentation for Nassau County housing compliance." },
    { q: "How quickly can Quest Pest respond in Valley Stream?", a: "Same-day service is available throughout Valley Stream. Call (631) 228-4498 for immediate dispatch — we cover all of southern Nassau County with rapid response capability." },
  ],

  'hicksville': [
    { q: "What pests are common in Hicksville's established neighborhoods?", a: "Hicksville's post-war suburban neighborhoods — largely built in the 1950s and 1960s — see consistent subterranean termite activity in aging sill plates, annual carpenter ant problems in homes with exterior wood trim and decks, and fall mouse invasions through gaps that develop as original construction materials age." },
    { q: "Does Hicksville's LIRR hub and commercial density affect pest activity?", a: "Commercial corridors around Hicksville's transit hub — particularly the restaurant and food service areas near the station — create local concentrations of German cockroaches and rodents that can spread to adjacent residential properties. Our commercial IPM programs address these commercial sources proactively." },
    { q: "Are termites common in Hicksville homes?", a: "Eastern subterranean termites are widespread throughout Nassau County including Hicksville. Homes with crawl spaces, wood debris in soil, or mulch against the foundation are at highest risk. Spring swarm season (April–May) is when termites become most visible — if you see winged termites indoors, call immediately." },
    { q: "Can Quest Pest help with ant infestations in Hicksville yards and gardens?", a: "Yes — both carpenter ants and pavement ants are common in Hicksville. Carpenter ants nest in wood and can cause structural damage over time. Pavement ants are a nuisance but less destructive. We identify the species and target the colony — not just surface-visible workers." },
  ],

  'westbury': [
    { q: "What are the common pest issues in Westbury's diverse neighborhoods?", a: "Westbury's mix of older residential streets, commercial areas along Old Country Road, and newer developments creates varied pest pressure. Rodents are active near commercial waste areas, German cockroaches persist in restaurant corridors, and subterranean termites affect the older housing stock throughout established neighborhoods." },
    { q: "Does UBS Arena proximity affect pest patterns in Westbury?", a: "Large entertainment venues attract significant food service activity and waste generation that supports local rodent populations. Residential properties within a few blocks of major commercial centers can experience elevated fall mouse pressure. Proactive exterior bait station programs provide the best protection." },
    { q: "Do you handle pest control for Westbury's commercial and restaurant businesses?", a: "Yes — Quest Pest provides commercial IPM for restaurants, retail, and food service businesses throughout Westbury. We meet Nassau County Health Department requirements, provide service documentation, and offer emergency response for active pest situations." },
    { q: "How quickly can you respond in Westbury?", a: "Same-day service is available throughout Westbury and surrounding Nassau communities. Call (631) 228-4498 for immediate dispatch." },
  ],

  'mineola': [
    { q: "What pest pressures exist in Mineola as Nassau County's county seat?", a: "Mineola's combination of government offices, commercial corridors, medical facilities around Winthrop-University Hospital, and established residential neighborhoods creates diverse pest challenges. Medical facilities require stringent IPM programs, commercial areas deal with rodents and cockroaches, and older residential homes carry termite and carpenter ant risk." },
    { q: "Do you provide pest control for Mineola's medical and professional buildings?", a: "Yes — Quest Pest serves medical offices, hospitals, and professional buildings throughout Mineola with IPM programs appropriate for healthcare environments. We use low-impact, odor-free products, provide complete service documentation, and schedule service to minimize patient and staff disruption." },
    { q: "Are older Mineola homes at elevated termite risk?", a: "Many of Mineola's residential streets have homes dating to the 1920s–1950s, with original wood construction that's highly vulnerable to subterranean termites after 70+ years. Annual inspections and bait station monitoring are strongly recommended for any Mineola home over 40 years old." },
    { q: "How quickly can Quest Pest respond in Mineola?", a: "Same-day service is available throughout Mineola. Our central Nassau County location allows rapid dispatch — call (631) 228-4498." },
  ],

  'manhasset': [
    { q: "What pest issues affect Manhasset's affluent North Shore community?", a: "Manhasset's elegant estate and Colonial-style homes on large wooded lots face significant subterranean termite risk in aging wood framing, carpenter ant pressure from mature trees adjacent to homes, and elevated deer tick exposure from deer movement through the heavily wooded North Shore landscape." },
    { q: "Are ticks a major concern in Manhasset's wooded residential areas?", a: "Yes — Manhasset's position in the wooded North Shore, with proximity to Nassau County golf courses and preserved areas, creates elevated tick habitat. Black-legged deer ticks are active from early spring through late fall, with peak risk periods in May–June and September–October." },
    { q: "Do you offer discreet service for Manhasset's upscale properties?", a: "Absolutely. Quest Pest understands the privacy expectations of Manhasset homeowners. We operate in unmarked vehicles on request, schedule service at your convenience, and provide premium service that respects your property and schedule." },
    { q: "Can you handle pest control for Miracle Mile commercial properties?", a: "Yes — Quest Pest provides commercial IPM for retail, restaurant, and professional properties on the Miracle Mile and throughout the Manhasset commercial corridor. We meet Nassau County requirements and provide service documentation for property management teams." },
  ],

  'oceanside': [
    { q: "What pest pressures come with Oceanside's South Shore waterfront proximity?", a: "Oceanside's position along Long Island Sound and the South Shore marshes creates elevated mosquito activity each summer, while moisture from the waterfront environment supports carpenter ant and subterranean termite activity in the aging housing stock. Rodents are active near the commercial corridor along Long Beach Road." },
    { q: "Are mosquitoes particularly bad in Oceanside's waterfront neighborhoods?", a: "Mosquito pressure is elevated throughout Oceanside due to proximity to South Shore tidal wetlands and local drainage ditches. Late spring through early fall brings the most intense activity. Our barrier treatment program significantly reduces adult mosquito populations around your outdoor living areas." },
    { q: "Do you handle termite treatment in Oceanside's older homes?", a: "Yes — Oceanside has a significant stock of 1940s–1960s homes with the wood construction and aging foundations that subterranean termites target. We offer liquid termiticide applications, bait station monitoring, and annual inspection programs tailored to coastal community properties." },
    { q: "How quickly can Quest Pest respond in Oceanside?", a: "Same-day service is available in Oceanside. Call (631) 228-4498 for immediate dispatch to your location." },
  ],

  'syosset': [
    { q: "What pests are common in Syosset's upscale North Shore neighborhoods?", a: "Syosset's large-lot Colonial and split-level homes, bordered by the Nassau-Suffolk greenbelt and extensive wooded areas, face significant deer tick exposure, carpenter ant activity from mature oak and maple trees adjacent to homes, and subterranean termite pressure in homes with wood-mulch landscaping and basement sill plates." },
    { q: "Is deer tick activity elevated in Syosset's wooded neighborhoods?", a: "Yes — Syosset's position in the Northern State Parkway greenbelt corridor means deer move freely through residential properties, bringing tick populations into yards and gardens. Black-legged tick activity peaks in May–June and September–October, with risk extending through November in mild years." },
    { q: "Are Syosset's upscale homes vulnerable to termite damage?", a: "Absolutely. Even newer construction is not immune to subterranean termites — the queens of established colonies can send foragers into homes built in the 1990s and 2000s. For Syosset's older homes built in the 1960s–1970s, the risk is higher still. Annual inspections are recommended for all homeowners." },
    { q: "Do you offer pest control programs for Syosset's commercial areas?", a: "Yes — Quest Pest serves commercial and retail accounts throughout Syosset including Jackson Avenue and the Cold Spring Road corridors. Call (631) 228-4498 for commercial service quotes." },
  ],

  'rockville-centre': [
    { q: "What are the top pest concerns in Rockville Centre's village community?", a: "Rockville Centre's mix of vintage single-family homes, apartment buildings, and an active commercial downtown creates diverse pest pressure. Older homes carry subterranean termite and carpenter ant risk, downtown restaurants attract rodents and cockroaches, and apartment buildings face potential bed bug spread between units." },
    { q: "Do you handle commercial pest control for Rockville Centre's downtown?", a: "Yes — Quest Pest provides commercial IPM for Rockville Centre's restaurants, retail establishments, and professional offices. We meet Nassau County Health Department standards, provide service documentation, and offer emergency response for active pest situations." },
    { q: "Are older Rockville Centre homes at termite risk?", a: "Many of Rockville Centre's most desirable homes date to the 1920s–1950s, with original construction that has aged significantly. Eastern subterranean termites are well-established throughout Nassau County and will target any home with wood-to-soil contact or moisture in the crawl space or basement." },
    { q: "How quickly can Quest Pest respond in Rockville Centre?", a: "Same-day service is available throughout Rockville Centre and southern Nassau. Call (631) 228-4498 for immediate dispatch." },
  ],

  'lynbrook': [
    { q: "What pest issues are common in Lynbrook's close-knit community?", a: "Lynbrook's dense residential character — with tightly spaced homes on smaller lots — means pests move quickly between properties. Carpenter ants nesting in shared fence lines and mature trees are a frequent complaint, while mice enter homes through shared foundations and soffits each fall." },
    { q: "Are there specific pest pressures in Lynbrook near commercial areas?", a: "Lynbrook's busy commercial corridor along Merrick Road creates local concentrations of rodents and German cockroaches that can spread to adjacent residential properties. Homes near commercial dumpster areas should have exterior bait station programs in place before fall rodent season." },
    { q: "Do you treat carpenter ants in Lynbrook without harming shared fencing?", a: "Yes — our carpenter ant treatment is targeted to the colony source, not broad-spectrum surface spraying. We use gel baits and targeted applications that protect shared fencing and landscaping while eliminating the nest." },
    { q: "How quickly can Quest Pest respond in Lynbrook?", a: "Same-day service is available in Lynbrook and throughout southern Nassau County. Call (631) 228-4498." },
  ],

  'merrick': [
    { q: "What pests affect Merrick's South Shore neighborhoods?", a: "Merrick's South Shore character — with its many waterways, Merrick Creek, and proximity to the South Shore marshes — creates elevated mosquito activity each summer and moisture conditions that support carpenter ants and subterranean termites in older homes. The heavily treed streets also create carpenter ant habitat from aging trees adjacent to homes." },
    { q: "Does Merrick's waterway network intensify mosquito problems?", a: "Yes — Merrick Creek and the various drainage ditches threading through the community create extended mosquito breeding habitat. Summer mosquito pressure is above average for Nassau County in the canal and waterway neighborhoods. Our seasonal barrier program significantly reduces exposure around outdoor living areas." },
    { q: "Are older Merrick homes at termite risk?", a: "Merrick has significant housing stock from the 1940s–1960s that is at elevated termite risk due to aging wood construction and decades of moisture exposure from the surrounding waterway environment. Annual termite inspections are recommended." },
    { q: "How quickly can Quest Pest respond in Merrick?", a: "Same-day service is available in Merrick. Call (631) 228-4498 for immediate dispatch throughout Nassau County." },
  ],

  'bellmore': [
    { q: "What pest concerns affect Bellmore's South Shore community?", a: "Bellmore's position between Merrick and Wantagh along the South Shore creates elevated mosquito pressure from nearby wetlands each summer, while the established 1950s–1960s housing stock carries standard termite and carpenter ant risk. North Bellmore's wooded character adds tick exposure from deer movement through the area." },
    { q: "Are mosquitoes elevated near Bellmore's waterway areas?", a: "Yes — the South Shore marshes and local drainage areas near Bellmore contribute to above-average mosquito pressure from late May through September. Our barrier program targets adult resting areas and provides season-long protection for outdoor spaces." },
    { q: "Do you serve North Bellmore as well as Bellmore proper?", a: "Yes — Quest Pest covers both Bellmore and North Bellmore, as well as neighboring Wantagh, Merrick, and Seaford. Call (631) 228-4498 for same-day service." },
    { q: "What's the best approach to keeping mice out of my Bellmore home?", a: "Prevention through exclusion is the gold standard. We inspect your foundation perimeter, utility entries, and soffit lines for gaps, then seal them with appropriate materials. Combined with exterior bait stations, this keeps mice outside rather than trapping them after they've entered." },
  ],

  'wantagh': [
    { q: "What pests are common in Wantagh's established South Shore neighborhoods?", a: "Wantagh's waterfront access via Jones Beach Causeway and proximity to Jones Beach State Park and Wantagh Park creates elevated summer mosquito pressure from wetland areas. The established 1950s–1960s housing stock has regular termite and carpenter ant activity, and deer from Jones Beach area marshes carry ticks into residential yards." },
    { q: "Does Jones Beach proximity affect pest activity in Wantagh?", a: "The wetlands and naturalized areas along the Jones Beach Causeway create mosquito breeding habitat that affects Wantagh neighborhoods during summer. Our barrier treatment program targets adult mosquitoes in the ornamental shrubs and wooded areas on your property — reducing outdoor exposure significantly." },
    { q: "Are ticks active in Wantagh's park-adjacent neighborhoods?", a: "Yes — deer movement through Wantagh Park and along the park corridor brings deer ticks into adjacent residential properties. Tick activity peaks in May–June and September–October. Outdoor barrier treatments protect yard edges and lawn-to-shrub transition zones." },
    { q: "How quickly can Quest Pest respond in Wantagh?", a: "Same-day service is available in Wantagh. Call (631) 228-4498 for immediate dispatch throughout Nassau County." },
  ],

  'farmingdale': [
    { q: "What pest pressures exist in Farmingdale's mix of commercial and residential areas?", a: "Farmingdale's Route 110 commercial corridor and industrial areas create significant rodent pressure near loading docks, food service establishments, and warehouse operations. The adjacent residential neighborhoods — particularly older homes near downtown — deal with subterranean termites, carpenter ants, and fall mouse invasions." },
    { q: "Can you handle commercial pest control for Farmingdale's industrial corridor?", a: "Yes — Quest Pest provides commercial IPM for industrial, warehouse, and food processing facilities throughout Farmingdale's Route 110 corridor. We provide service documentation, IPM compliance records, and emergency response for active pest situations." },
    { q: "Are older downtown Farmingdale homes at elevated termite risk?", a: "Downtown Farmingdale has housing stock dating to the early 1900s with wood construction that is prime territory for subterranean termites. Annual inspections and bait station monitoring are recommended for all homes over 40 years old in this area." },
    { q: "Do you serve Bethpage and Melville from Farmingdale?", a: "Yes — Quest Pest covers Farmingdale and all neighboring communities including Bethpage, Melville, South Farmingdale, and Old Bethpage. Call (631) 228-4498 for same-day service." },
  ],

  // ── QUEENS HUBS ───────────────────────────────────────────────────────────

  'flushing': [
    { q: "What pest challenges are common in Flushing's densely urban neighborhoods?", a: "Flushing's extraordinary density — with multi-story mixed-use buildings, busy commercial corridors, and a thriving restaurant scene centered around Main Street — creates intense rodent pressure in commercial waste areas, persistent German cockroach infestations in food establishments, and bed bug spread through the high-turnover apartment buildings surrounding downtown." },
    { q: "How do you handle pest control in Flushing's dense restaurant corridors?", a: "Commercial pest control in Flushing requires rapid response, low-odor products appropriate for food environments, after-hours scheduling, and documentation that meets New York City Department of Health requirements. Quest Pest provides IPM programs specifically designed for high-volume restaurant environments." },
    { q: "Are bed bugs a significant concern in Flushing apartments?", a: "Bed bugs are a persistent challenge in Flushing's high-density apartment buildings, particularly in buildings with high tenant turnover near the transit hub. They spread through walls, elevator corridors, and shared laundry rooms. Quest Pest offers K-9 detection and heat treatment for complete elimination." },
    { q: "How quickly can Quest Pest respond to a commercial pest emergency in Flushing?", a: "Quest Pest offers same-day response for commercial pest emergencies in Flushing. Call (631) 228-4498 for immediate dispatch — we serve all Queens neighborhoods with rapid response capability." },
  ],

  'jamaica': [
    { q: "What are the top pest concerns in Jamaica's diverse urban neighborhoods?", a: "Jamaica's dense housing, busy commercial corridors near JFK Airport approach routes, and aging multi-family building stock create persistent pressure from rodents, German cockroaches, and bed bugs. The transit hub at Jamaica Station also contributes to bed bug introduction from traveling residents." },
    { q: "Are rodents a significant problem near Jamaica's commercial areas?", a: "Yes — Jamaica's commercial corridors along Jamaica Avenue and Sutphin Boulevard, combined with extensive restaurant activity, create year-round rodent pressure that extends into adjacent residential streets. Our rodent program combines exterior bait stations, thorough inspection, and exclusion work to stop rodents at the entry point." },
    { q: "Do you handle multi-family building pest control in Jamaica?", a: "Quest Pest has extensive experience in Jamaica's multi-family residential buildings, working with property managers to coordinate unit-by-unit treatment programs, address common area pest issues, and provide documentation for NYC Housing Preservation and Development (HPD) inspections." },
    { q: "Does JFK Airport proximity affect pest activity in Jamaica neighborhoods?", a: "The significant food service and waste generation around JFK Airport contributes to elevated rodent pressure in Jamaica neighborhoods near the airport approach corridor. Our proactive rodent programs create a protective buffer around residential properties in these areas." },
  ],

  'astoria': [
    { q: "What pest issues are most common in Astoria's urban neighborhoods?", a: "Astoria's vibrant mix of attached townhouses, walk-up apartments, and a thriving restaurant scene creates consistent pressure from rodents in commercial waste corridors, German cockroaches in food service establishments, and bed bugs spreading between the closely spaced residential buildings. Older pre-war apartment buildings are particularly vulnerable." },
    { q: "Do pre-war Astoria buildings have elevated pest risk?", a: "Absolutely. Pre-war construction (pre-1940) in Astoria typically features brick-and-mortar construction with extensive gaps around old plumbing and steam heat pipes — ideal highways for cockroaches and mice between units. Effective treatment requires identifying and sealing these pathways in addition to targeted pesticide application." },
    { q: "How do you handle restaurant pest control on Astoria's dining corridors?", a: "Astoria's renowned restaurant scene — particularly along Ditmars Boulevard and 30th Avenue — demands rapid, discreet pest response. Quest Pest provides after-hours commercial treatment, meets NYC Department of Health documentation requirements, and uses low-impact products appropriate for food preparation environments." },
    { q: "Are bed bugs common in Astoria apartments?", a: "Bed bugs are an ongoing concern in Astoria's dense apartment stock. They spread between units through shared walls, baseboards, and electrical boxes. Quest Pest offers K-9 detection for precise identification, heat treatment for complete elimination, and comprehensive multi-unit treatment programs." },
  ],

  'forest-hills': [
    { q: "What pest pressures exist in Forest Hills' distinctive residential communities?", a: "Forest Hills Gardens — with its unique Tudor-style attached homes and manicured communal spaces — presents particular challenges from moisture ants and silverfish in the damp basement areas common in these older designs. The broader Forest Hills area's mid-rise apartment buildings deal with German cockroaches and bed bugs, while the wooded areas near Queens Boulevard attract occasional rat activity." },
    { q: "Do Forest Hills Gardens homes require specialized pest treatment?", a: "Forest Hills Gardens' historic construction requires careful pest management — the Tudor and English cottage architecture features extensive interior woodwork, low-clearance crawl spaces, and older plumbing that supports both moisture pests and rodent activity. We use targeted, low-impact products that protect historic finishes." },
    { q: "Are bed bugs a concern in Forest Hills apartment buildings?", a: "Yes — Forest Hills' substantial mid-rise apartment stock, particularly buildings along Queens Boulevard and Yellowstone Boulevard, sees bed bug activity that spreads through elevator lobbies, laundry rooms, and shared utility spaces. K-9 inspection and heat treatment provide the most reliable detection and elimination." },
    { q: "How quickly can Quest Pest respond in Forest Hills?", a: "Same-day service is available throughout Forest Hills and surrounding Queens neighborhoods. Call (631) 228-4498 for immediate dispatch." },
  ],

  'jackson-heights': [
    { q: "What are the main pest concerns in Jackson Heights' dense urban environment?", a: "Jackson Heights' extraordinary residential density — with large 1930s cooperative apartment buildings, attached row houses, and busy commercial corridors — creates intense pressure from German cockroaches in food establishments, rodents in commercial waste areas along Roosevelt Avenue, and bed bugs spreading through the closely packed residential buildings." },
    { q: "How do you treat pest issues in Jackson Heights' large co-op buildings?", a: "Jackson Heights' iconic 1930s garden apartment cooperatives require coordinated building-wide treatment when pests spread through shared infrastructure. We work with building management boards to schedule access to all affected units simultaneously — the only way to fully eliminate cockroach and bed bug infestations in multi-unit buildings." },
    { q: "Are German cockroaches a persistent problem in Jackson Heights apartments?", a: "German cockroaches are among the most common pest complaints in Jackson Heights due to the age of the housing stock, dense commercial food activity along Roosevelt Avenue, and the interconnected nature of the large cooperative buildings. Effective treatment targets the colony with gel baits in harborage areas — not just visible cockroaches." },
    { q: "Do you serve Elmhurst and East Elmhurst from Jackson Heights?", a: "Yes — Quest Pest covers Jackson Heights, Elmhurst, East Elmhurst, and all surrounding Queens neighborhoods. Call (631) 228-4498 for same-day service." },
  ],

  'howard-beach': [
    { q: "What pest issues affect Howard Beach's waterfront community?", a: "Howard Beach's position on Jamaica Bay creates elevated mosquito pressure from tidal wetlands, significant Norway rat activity along the bulkhead and marina waterfront, and moisture conditions that support carpenter ants and subterranean termites in the older waterfront homes." },
    { q: "Are mosquitoes a major problem near Howard Beach's Jamaica Bay waterfront?", a: "Yes — Jamaica Bay's extensive tidal wetlands are a major mosquito breeding source that affects Howard Beach and surrounding communities from late May through September. Our barrier treatment program targets adult resting areas around your property, significantly reducing outdoor mosquito exposure during peak season." },
    { q: "Are waterfront Norway rats a significant problem in Howard Beach?", a: "Norway rats are endemic to waterfront communities like Howard Beach, where they burrow along bulkheads, under docks, and near boat storage areas. Our waterfront rodent program uses tamper-resistant exterior bait stations positioned along the bulkhead perimeter combined with exclusion work on the home foundation." },
    { q: "How quickly can Quest Pest respond in Howard Beach?", a: "Same-day service is available throughout Howard Beach and surrounding Queens communities including Ozone Park and Broad Channel. Call (631) 228-4498." },
  ],

  'bayside': [
    { q: "What pest pressures affect Bayside's North Queens neighborhoods?", a: "Bayside's character as a quieter, more suburban Queens community — with attached brick homes, mature street trees, and proximity to Alley Pond Park — creates carpenter ant pressure from maturing trees adjacent to homes, occasional tick activity along the Alley Pond Greenway, and standard urban pest pressure from cockroaches and mice in older housing." },
    { q: "Does Alley Pond Park proximity affect pest activity in Bayside?", a: "Yes — Alley Pond Park's wooded areas and wetlands create tick habitat that extends into adjacent Bayside neighborhoods, particularly along the Greenway. Deer movement through the park corridor also contributes to tick exposure in nearby residential yards." },
    { q: "Are older Bayside homes more susceptible to termites?", a: "Bayside has significant housing stock from the 1940s–1960s that carries elevated termite risk due to aging wood construction and decades of seasonal moisture exposure. Annual inspections are recommended for any Bayside home over 40 years old." },
    { q: "How quickly can Quest Pest respond in Bayside?", a: "Same-day service is available in Bayside and throughout northeastern Queens. Call (631) 228-4498 for immediate dispatch." },
  ],

  'long-island-city': [
    { q: "What pest issues are common in Long Island City's rapidly developed neighborhoods?", a: "Long Island City's transformation from industrial to mixed residential and commercial use has created unique pest challenges. Legacy industrial buildings with decades of rodent burrowing infrastructure intersect with new luxury apartment towers where building amenities attract cockroaches and bed bugs arrive with residents relocating from other urban areas." },
    { q: "Do new luxury apartment buildings in LIC have pest problems?", a: "Yes — new construction is not pest-free. Common issues in new LIC high-rises include bed bugs introduced by incoming residents, German cockroaches entering through building amenity kitchens and loading docks, and mice accessing upper floors through elevator shafts and utility chases from ground-level entry points." },
    { q: "How do you handle commercial pest control in LIC's mixed-use buildings?", a: "Long Island City's mixed residential-commercial buildings require coordinated pest management across multiple use types — restaurants, retail, and residential — often sharing the same building infrastructure. Quest Pest develops building-specific IPM programs that address each use type with appropriate products and scheduling." },
    { q: "How quickly can Quest Pest respond in Long Island City?", a: "Same-day service is available throughout LIC and western Queens. Call (631) 228-4498 for immediate commercial or residential dispatch." },
  ],

  'ridgewood': [
    { q: "What are the main pest concerns in Ridgewood's historic rowhouse neighborhoods?", a: "Ridgewood's landmark 19th and early 20th century masonry rowhouse blocks create specific pest pathways — brick wall cavities, aging mortar joints, and original cast-iron plumbing provide highways for cockroaches, mice, and bed bugs to move between adjacent units. German cockroaches and mice are the most consistent complaints." },
    { q: "Do Ridgewood's attached rowhouses create pest-spreading problems?", a: "Significantly. Ridgewood's tightly attached masonry rowhouses share party walls, plumbing chases, and basement utility areas that allow pests to migrate between properties. Treating a single unit while adjacent units have active infestations provides only temporary relief — we recommend coordinated multi-unit approaches." },
    { q: "Are bed bugs a concern in Ridgewood's older apartment stock?", a: "Yes — the density and age of Ridgewood's housing makes bed bug spread through walls, floors, and shared laundry a persistent concern. K-9 detection provides precise identification of affected units, and heat treatment eliminates infestations completely without chemical residue in living spaces." },
    { q: "How quickly can Quest Pest respond in Ridgewood?", a: "Same-day service is available in Ridgewood and throughout Queens. Call (631) 228-4498 for immediate dispatch." },
  ],

  'rego-park': [
    { q: "What pest issues are common in Rego Park's mid-rise residential community?", a: "Rego Park's concentration of 1950s–1970s mid-rise apartment buildings along Queens Boulevard and 63rd Drive creates conditions where German cockroaches and mice spread readily through shared building infrastructure — elevator shafts, utility rooms, and laundry facilities. Bed bugs are an ongoing concern in buildings with high tenant turnover." },
    { q: "Do you handle building-wide pest treatment programs in Rego Park?", a: "Yes — Quest Pest coordinates with building management in Rego Park to schedule building-wide cockroach and bed bug programs. Treating all affected units simultaneously, along with common areas, is essential for sustained results in mid-rise buildings." },
    { q: "Are German cockroaches difficult to eliminate in Rego Park apartments?", a: "German cockroaches are the most challenging urban pest because they reproduce rapidly and hide in inaccessible areas behind appliances and inside wall voids. Effective elimination requires gel baiting in harborage areas, flushing treatments to contact hidden populations, and a follow-up visit to confirm elimination." },
    { q: "How quickly can Quest Pest respond in Rego Park?", a: "Same-day service is available throughout Rego Park and central Queens. Call (631) 228-4498." },
  ],

  'fresh-meadows': [
    { q: "What pest pressures exist in Fresh Meadows' planned community?", a: "Fresh Meadows' 1940s–1950s planned development — with its garden apartment style buildings, attached brick homes, and tree-lined greenways — sees carpenter ant activity from the mature tree canopy, German cockroaches in the apartment buildings, and occasional mouse invasions in both apartments and attached homes each fall." },
    { q: "Are older Fresh Meadows homes at termite risk?", a: "Yes — the original 1940s–1950s construction throughout Fresh Meadows has the aging wood structures and crawl space conditions that subterranean termites target. Annual inspections are recommended for homeowners in the attached home sections of the development." },
    { q: "Do Fresh Meadows apartment buildings have cockroach problems?", a: "German cockroaches are common in Fresh Meadows apartment buildings — particularly in older buildings where kitchen and bathroom plumbing chases provide easy movement between units. Effective treatment requires gel baiting in all harborage areas and follow-up to confirm complete elimination." },
    { q: "How quickly can Quest Pest respond in Fresh Meadows?", a: "Same-day service is available in Fresh Meadows and throughout northeast Queens. Call (631) 228-4498." },
  ],

  'glendale': [
    { q: "What pest issues affect Glendale's attached homes and mixed-use areas?", a: "Glendale's dense attached-home neighborhoods and commercial corridors along Myrtle Avenue create consistent rodent pressure from commercial waste areas and German cockroach activity in food establishments. The older attached homes throughout the community carry standard urban pest pressure from mice, cockroaches, and occasional bed bug activity." },
    { q: "Are mice a significant problem in Glendale's attached homes?", a: "Yes — attached-home construction means mice can spread laterally through shared party walls and basement areas. Once established in a rowblock, mice access multiple units through shared utility chases. Our program combines exclusion of external entry points with interior treatment to break the infestation cycle." },
    { q: "Do you handle commercial pest control on Myrtle Avenue in Glendale?", a: "Yes — Quest Pest provides IPM programs for commercial accounts throughout Glendale including Myrtle Avenue retail and food service establishments. We meet NYC Health Department requirements and offer emergency response for active situations." },
    { q: "How quickly can Quest Pest respond in Glendale?", a: "Same-day service is available in Glendale and throughout Queens. Call (631) 228-4498." },
  ],

  'woodhaven': [
    { q: "What pests are most common in Woodhaven's older residential neighborhoods?", a: "Woodhaven's early 20th century rowhouses and attached homes carry elevated risk from German cockroaches spreading through shared plumbing infrastructure, mice accessing homes through deteriorating mortar joints and utility penetrations, and occasional bed bug activity in the denser sections near Jamaica Avenue." },
    { q: "Does Jamaica Avenue proximity affect pest pressure in Woodhaven?", a: "Commercial activity along Jamaica Avenue — particularly food service establishments and retail waste — supports local rodent populations that extend into adjacent residential streets. Proactive exterior bait station programs protect homes near commercial corridors." },
    { q: "How do you handle cockroach infestations in Woodhaven rowhouses?", a: "German cockroach elimination in attached homes requires gel baiting in all kitchen and bathroom harborage areas, treatment of wall voids around plumbing penetrations, and follow-up service to confirm elimination. Single-application treatments rarely achieve sustained results." },
    { q: "How quickly can Quest Pest respond in Woodhaven?", a: "Same-day service is available in Woodhaven and throughout Queens. Call (631) 228-4498." },
  ],

  'ozone-park': [
    { q: "What pest issues affect Ozone Park's South Queens neighborhoods?", a: "Ozone Park's combination of semi-attached homes, commercial corridors near JFK Airport, and proximity to Jamaica Bay creates diverse pest pressure. Rodents are active near the airport-area commercial zones, mosquitoes breed in the marshes bordering the bay, and German cockroaches persist in the older residential housing stock." },
    { q: "Does JFK Airport proximity affect pest activity in Ozone Park?", a: "Yes — the significant food service activity and waste generation in the JFK Airport corridor contributes to elevated rodent pressure in nearby Ozone Park neighborhoods, particularly in North Ozone Park near Rockaway Boulevard. Proactive exterior rodent programs provide the best protection." },
    { q: "Are mosquitoes elevated near Jamaica Bay in Ozone Park?", a: "The marshes and wetlands along Jamaica Bay contribute to elevated summer mosquito pressure in southern Ozone Park and Howard Beach. Our barrier treatment program targets adult mosquitoes in ornamental shrubs and lawn border areas — significantly reducing outdoor exposure." },
    { q: "How quickly can Quest Pest respond in Ozone Park?", a: "Same-day service is available throughout Ozone Park. Call (631) 228-4498 for immediate dispatch." },
  ],

  'richmond-hill': [
    { q: "What are the main pest concerns in Richmond Hill's historic neighborhood?", a: "Richmond Hill's Victorian-era and early 20th century attached and semi-attached homes carry significant pest risk from German cockroaches in aging kitchen and bathroom infrastructure, mice entering through deteriorating foundations and mortar joints, and bed bugs spreading through the denser sections near Liberty Avenue." },
    { q: "Do Richmond Hill's older Victorian homes have elevated pest risk?", a: "Yes — Richmond Hill has some of Queens' oldest residential architecture, with homes from the 1890s–1920s that have aging foundations, original cast-iron plumbing, and decades of crack and gap development that provides easy pest access. Annual inspection and proactive treatment are strongly recommended." },
    { q: "Are bed bugs a concern in Richmond Hill's rental properties?", a: "Bed bugs are an ongoing issue in Richmond Hill's rental housing market. High tenant turnover and older building stock create conditions for repeat introductions. Quest Pest offers between-tenancy inspections, K-9 detection, and heat treatment for rental property landlords." },
    { q: "How quickly can Quest Pest respond in Richmond Hill?", a: "Same-day service is available in Richmond Hill and throughout Queens. Call (631) 228-4498." },
  ],

  'corona': [
    { q: "What pest pressures exist in Corona's densely populated neighborhoods?", a: "Corona's extraordinary density — one of the most densely populated communities in the United States — creates intense pressure from German cockroaches, mice, and bed bugs spreading through the very closely packed housing stock, multi-family buildings, and active commercial corridors along Junction Boulevard and Northern Boulevard." },
    { q: "How do you handle pest control in Corona's multi-family buildings?", a: "Effective pest management in Corona's multi-family buildings requires coordinated treatment across all affected units simultaneously. Individual unit treatments provide only temporary relief when pest sources remain in adjacent units or shared utility spaces. Quest Pest works with building owners to develop comprehensive building-wide programs." },
    { q: "Are German cockroaches a persistent problem in Corona apartments?", a: "German cockroaches are among the most common complaints in Corona's apartment buildings and commercial food establishments. They spread through shared plumbing, electrical conduits, and wall spaces between units. Gel baiting combined with insect growth regulators provides the most effective long-term suppression." },
    { q: "How quickly can Quest Pest respond in Corona?", a: "Same-day service is available in Corona and throughout Queens. Call (631) 228-4498 for immediate dispatch." },
  ],

  'elmhurst': [
    { q: "What pest challenges are common in Elmhurst's dense urban neighborhoods?", a: "Elmhurst's exceptional density, vibrant international food market scene along Queens Boulevard and Broadway, and older apartment building stock create intense German cockroach and rodent pressure in commercial areas that spreads into adjacent residential buildings. Bed bugs are an ongoing concern in high-turnover rental buildings." },
    { q: "How do you handle pest control in Elmhurst's food market corridors?", a: "Food markets and ethnic grocery stores along Elmhurst's commercial corridors require specialized IPM — product selection that avoids contamination of food products, after-hours treatment scheduling, and New York City Health Department compliant documentation. Quest Pest is experienced with these requirements." },
    { q: "Are rodents a significant problem in Elmhurst's commercial areas?", a: "Yes — Elmhurst's active food market corridors and restaurant concentrations create year-round rodent pressure that extends into residential streets and subway station access points. Our commercial rodent program combines exterior bait stations with exclusion work to stop rodents at building perimeters." },
    { q: "How quickly can Quest Pest respond in Elmhurst?", a: "Same-day service is available in Elmhurst and throughout central Queens. Call (631) 228-4498." },
  ],

  'maspeth': [
    { q: "What pest pressures exist in Maspeth's industrial and residential mix?", a: "Maspeth's unique combination of heavy industrial operations along the Newtown Creek corridor and established residential neighborhoods creates significant rodent pressure from industrial waste areas that extends into surrounding streets. German cockroaches are active in food service establishments along Grand Avenue, and mice are endemic to the older rowhouse sections." },
    { q: "Does Newtown Creek's industrial area affect pest pressure in Maspeth?", a: "Significantly. Newtown Creek's industrial properties — with their loading docks, waste areas, and aged infrastructure — support large rodent populations that spread into adjacent residential Maspeth. Our residential rodent program in these areas emphasizes exterior exclusion work to prevent industrial-area rodents from accessing homes." },
    { q: "Are German cockroaches common in Maspeth's commercial areas?", a: "German cockroaches are persistent in Maspeth's restaurant and deli establishments along Grand Avenue. Commercial IPM programs using gel baits, growth regulators, and monitoring stations provide sustained control that meets NYC Health Department standards." },
    { q: "How quickly can Quest Pest respond in Maspeth?", a: "Same-day service is available in Maspeth and throughout Queens. Call (631) 228-4498." },
  ],

  'middle-village': [
    { q: "What pest issues are common in Middle Village's residential community?", a: "Middle Village's predominantly single-family and attached-home character — with mature tree coverage and relatively lower density than surrounding Queens neighborhoods — sees carpenter ant activity from maturing street trees, standard urban rodent and cockroach pressure near commercial areas, and seasonal mouse invasions in older attached homes each fall." },
    { q: "Are carpenter ants a problem in Middle Village's tree-lined streets?", a: "Yes — Middle Village's mature oak and maple street trees, combined with older wood-frame and attached-brick homes, create consistent carpenter ant pressure. Ants from decaying wood in trees readily spread to adjacent homes. We target the colony in both the source tree and any satellite nests in the home." },
    { q: "Do you treat pest issues near Middle Village's commercial areas?", a: "Yes — Quest Pest serves commercial accounts along Metropolitan Avenue and Eliot Avenue in Middle Village. Commercial IPM programs meet NYC Health Department requirements and include emergency response for active pest situations." },
    { q: "How quickly can Quest Pest respond in Middle Village?", a: "Same-day service is available in Middle Village and throughout Queens. Call (631) 228-4498." },
  ],

  'far-rockaway': [
    { q: "What pest challenges are unique to Far Rockaway's ocean peninsula community?", a: "Far Rockaway's barrier peninsula location — with the Atlantic Ocean to the south and Jamaica Bay to the north — creates intense summer mosquito pressure from bay wetlands, salt marsh mosquito activity, significant rodent pressure near the commercial areas around Mott Avenue, and moisture conditions in older housing that support German cockroaches and moisture ants." },
    { q: "Are mosquitoes especially bad in Far Rockaway due to Jamaica Bay?", a: "Yes — Jamaica Bay's extensive tidal wetlands are a major mosquito source for Far Rockaway communities from late May through September. Salt marsh mosquitoes are strong fliers that travel considerable distances from breeding sites. Our barrier treatment targets adult harborage areas on your property during peak season." },
    { q: "Do you handle pest control for Far Rockaway's public housing and multi-family buildings?", a: "Yes — Quest Pest serves multi-family and public housing adjacent buildings throughout Far Rockaway. We work with property managers and housing coordinators to develop building-wide programs addressing cockroaches, rodents, and bed bugs with appropriate documentation." },
    { q: "How quickly can Quest Pest respond in Far Rockaway?", a: "Same-day service is available in Far Rockaway and the Rockaway Peninsula. Call (631) 228-4498 for immediate dispatch." },
  ],
};

// ─── Curated Nearby Towns ─────────────────────────────────────────────────────
export const questNearbyTowns: Record<string, string[]> = {
  // Suffolk hubs
  'huntington': ['Cold Spring Harbor', 'Northport', 'Commack', 'Melville', 'Lloyd Neck'],
  'babylon': ['Bay Shore', 'West Babylon', 'Lindenhurst', 'Copiague', 'North Babylon'],
  'smithtown': ['Commack', 'Nesconset', 'Kings Park', 'St. James', 'Hauppauge'],
  'islip': ['Bay Shore', 'East Islip', 'West Islip', 'Oakdale', 'Brightwaters'],
  'hauppauge': ['Commack', 'Smithtown', 'Nesconset', 'Islandia', 'Central Islip'],
  'ronkonkoma': ['Holbrook', 'Lake Ronkonkoma', 'Bohemia', 'Central Islip', 'Hauppauge'],
  'patchogue': ['Blue Point', 'Medford', 'East Patchogue', 'North Patchogue', 'Bellport'],
  'bay-shore': ['Islip', 'West Islip', 'Babylon', 'North Bay Shore', 'Brightwaters'],
  'northport': ['Huntington', 'Cold Spring Harbor', 'Centerport', 'Greenlawn', 'Asharoken'],
  'port-jefferson': ['Port Jefferson Station', 'Belle Terre', 'Mount Sinai', 'Setauket', 'Terryville'],
  'brentwood': ['Central Islip', 'Bay Shore', 'Islip', 'North Bay Shore', 'Hauppauge'],
  'central-islip': ['Brentwood', 'Bay Shore', 'Hauppauge', 'Ronkonkoma', 'Islandia'],
  'commack': ['Smithtown', 'Huntington', 'Hauppauge', 'Kings Park', 'Melville'],
  'east-hampton': ['Amagansett', 'Wainscott', 'Springs', 'Sag Harbor', 'Bridgehampton'],
  'southampton': ['Water Mill', 'Bridgehampton', 'Hampton Bays', 'Flanders', 'Quogue'],
  'riverhead': ['Aquebogue', 'Calverton', 'Wading River', 'Jamesport', 'Baiting Hollow'],
  'montauk': ['East Hampton', 'Amagansett', 'Springs', 'Napeague', 'Hither Hills'],
  'melville': ['Huntington', 'Commack', 'Deer Park', 'Half Hollow Hills', 'Dix Hills'],
  'deer-park': ['Melville', 'Commack', 'Dix Hills', 'North Babylon', 'Wyandanch'],
  'lindenhurst': ['Babylon', 'North Lindenhurst', 'West Babylon', 'Copiague', 'Amityville'],
  // Nassau hubs
  'garden-city': ['Mineola', 'Carle Place', 'East Garden City', 'Stewart Manor', 'New Hyde Park'],
  'hempstead': ['West Hempstead', 'Baldwin', 'Uniondale', 'Garden City', 'Elmont'],
  'levittown': ['Hicksville', 'Wantagh', 'East Meadow', 'Bethpage', 'Seaford'],
  'great-neck': ['Kings Point', 'Great Neck Estates', 'Manhasset', 'Port Washington', 'Great Neck Plaza'],
  'freeport': ['Baldwin', 'Merrick', 'Oceanside', 'South Freeport', 'Milburn'],
  'massapequa': ['Massapequa Park', 'Seaford', 'Wantagh', 'Old Bethpage', 'Farmingdale'],
  'long-beach': ['Lido Beach', 'Atlantic Beach', 'Island Park', 'Oceanside', 'East Rockaway'],
  'valley-stream': ['Lynbrook', 'Malverne', 'Elmont', 'Rosedale', 'West Valley Stream'],
  'hicksville': ['Syosset', 'Levittown', 'Westbury', 'Plainview', 'Farmingdale'],
  'westbury': ['Hicksville', 'Carle Place', 'East Meadow', 'New Cassel', 'Old Westbury'],
  'mineola': ['Garden City', 'Carle Place', 'New Hyde Park', 'Williston Park', 'East Williston'],
  'manhasset': ['Great Neck', 'Port Washington', 'Roslyn', 'Plandome', 'Lake Success'],
  'oceanside': ['Rockville Centre', 'Baldwin', 'East Rockaway', 'Freeport', 'Island Park'],
  'syosset': ['Plainview', 'Hicksville', 'Woodbury', 'Jericho', 'Oyster Bay Cove'],
  'rockville-centre': ['Oceanside', 'Lynbrook', 'Baldwin', 'East Rockaway', 'South Hempstead'],
  'lynbrook': ['Valley Stream', 'Rockville Centre', 'East Rockaway', 'Malverne', 'West Hempstead'],
  'merrick': ['Bellmore', 'Wantagh', 'North Merrick', 'Freeport', 'Seaford'],
  'bellmore': ['Merrick', 'North Bellmore', 'Wantagh', 'Seaford', 'North Wantagh'],
  'wantagh': ['Levittown', 'Seaford', 'Bellmore', 'Massapequa', 'North Wantagh'],
  'farmingdale': ['Bethpage', 'North Massapequa', 'South Farmingdale', 'Old Bethpage', 'Massapequa'],
  // Queens hubs
  'flushing': ['Murray Hill', 'College Point', 'Whitestone', 'Auburndale', 'Fresh Meadows'],
  'jamaica': ['Jamaica Hills', 'South Jamaica', 'St. Albans', 'Hollis', 'Queens Village'],
  'astoria': ['Long Island City', 'Ditmars-Steinway', 'Jackson Heights', 'Woodside', 'Sunnyside'],
  'forest-hills': ['Rego Park', 'Kew Gardens', 'Kew Gardens Hills', 'Jamaica Estates', 'Briarwood'],
  'jackson-heights': ['Elmhurst', 'Corona', 'East Elmhurst', 'Woodside', 'Astoria'],
  'howard-beach': ['Ozone Park', 'Broad Channel', 'Old Howard Beach', 'Hamilton Beach', 'Lindenwood'],
  'bayside': ['Douglaston', 'Little Neck', 'Fresh Meadows', 'Auburndale', 'Oakland Gardens'],
  'long-island-city': ['Astoria', 'Hunters Point', 'Sunnyside', 'Woodside', 'Ridgewood'],
  'ridgewood': ['Glendale', 'Maspeth', 'Middle Village', 'Bushwick', 'Woodhaven'],
  'rego-park': ['Forest Hills', 'Elmhurst', 'Jackson Heights', 'Corona', 'Flushing'],
  'fresh-meadows': ['Flushing', 'Bayside', 'Auburndale', 'Jamaica Estates', 'Hollis Hills'],
  'glendale': ['Ridgewood', 'Maspeth', 'Middle Village', 'Woodhaven', 'Richmond Hill'],
  'woodhaven': ['Ozone Park', 'Richmond Hill', 'Glendale', 'South Ozone Park', 'Jamaica'],
  'ozone-park': ['Howard Beach', 'South Ozone Park', 'Woodhaven', 'Richmond Hill', 'Jamaica'],
  'richmond-hill': ['South Richmond Hill', 'Kew Gardens', 'Ozone Park', 'Woodhaven', 'Jamaica'],
  'corona': ['Jackson Heights', 'Elmhurst', 'Flushing', 'East Elmhurst', 'Rego Park'],
  'elmhurst': ['Jackson Heights', 'Corona', 'Rego Park', 'Maspeth', 'Woodside'],
  'maspeth': ['Ridgewood', 'Middle Village', 'Glendale', 'Woodside', 'Long Island City'],
  'middle-village': ['Glendale', 'Maspeth', 'Ridgewood', 'Forest Hills', 'Woodhaven'],
  'far-rockaway': ['Arverne', 'Edgemere', 'Bayswater', 'Rockaway Park', 'Belle Harbor'],
};

// ─── Neighborhood Highlights ──────────────────────────────────────────────────
export const questNeighborhoods: Record<string, { name: string; context: string }[]> = {
  // ── SUFFOLK ──────────────────────────────────────────────────────────────
  'huntington': [
    { name: 'Huntington Village', context: 'Historic downtown with Victorian homes and mature tree canopy creates elevated termite and carpenter ant pressure along Main Street corridors.' },
    { name: 'Cold Spring Harbor', context: 'Waterfront estate properties with wooded lots face significant deer tick exposure and seasonal rodent pressure from harbor-adjacent marshland.' },
    { name: 'Centerport', context: 'Harbor-facing community with older homes on large wooded lots — prime territory for carpenter ants and subterranean termites.' },
  ],
  'babylon': [
    { name: 'Babylon Village', context: 'Victorian-era village homes with mature trees and Great South Bay proximity create elevated termite pressure and year-round carpenter ant activity.' },
    { name: 'Amityville', context: 'Canal community with tidal wetland borders — elevated summer mosquito pressure and persistent Norway rat activity near bulkhead areas.' },
    { name: 'North Amityville', context: 'Dense residential area with older housing stock — standard suburban pest pressure from mice, cockroaches, and subterranean termites in aging foundations.' },
  ],
  'patchogue': [
    { name: 'Patchogue Village', context: 'Revitalized downtown with restaurants, apartments, and historic commercial buildings — German cockroach and rodent pressure in food service corridors.' },
    { name: 'Blue Point', context: 'Waterfront community on Great South Bay with elevated summer mosquito activity from adjacent tidal wetlands.' },
    { name: 'East Patchogue', context: 'Residential area with Sunrise Highway commercial border — rodent pressure from commercial areas extends into neighboring residential streets.' },
  ],
  'southampton': [
    { name: 'Southampton Village', context: 'High-end estate village with older homes and large wooded lots — significant deer tick exposure and carpenter ant activity in mature trees adjacent to structures.' },
    { name: 'Water Mill', context: 'Agricultural and estate character with extensive wooded and farm-adjacent areas — elevated stink bug invasion pressure each fall and active deer tick populations.' },
    { name: 'Bridgehampton', context: 'Estate community between Southampton and East Hampton — deer tick pressure from large natural areas, occasional lone star tick activity increasing.' },
  ],
  'east-hampton': [
    { name: 'East Hampton Village', context: 'Prestigious estate village with large wooded lots and decorative water features — deer tick exposure, mosquito breeding in ornamental ponds, and carpenter ant activity in aged outbuildings.' },
    { name: 'Amagansett', context: 'Ocean-adjacent community with extensive beach dune and shrub habitat — elevated salt marsh mosquito pressure and deer tick activity from adjacent natural areas.' },
    { name: 'Springs', context: 'Wooded, naturalistic community with less manicured properties — very high deer tick density and carpenter ant activity in homes bordering Accabonac Harbor wetlands.' },
  ],
  'hauppauge': [
    { name: 'Hauppauge Industrial Park', context: "One of the nation's largest industrial parks — rodent pressure near loading docks, German cockroaches in food service, and bird pressure on rooftops requiring commercial IPM programs." },
    { name: 'Veterans Highway Corridor', context: 'Commercial and light industrial corridor — sustained rodent pressure from food service waste areas extending into adjacent residential neighborhoods.' },
    { name: 'Wheeler Road', context: 'Mixed commercial and residential edge area — standard suburban pest pressure with elevated ant and termite activity in homes bordering industrial greenspace.' },
  ],
  'riverhead': [
    { name: 'Riverhead Town', context: 'County seat with historic downtown and Peconic River waterfront — rodent pressure near commercial dumpsters, elevated mosquito activity from riverside park areas.' },
    { name: 'Aquebogue', context: 'Agricultural and vineyard community on the North Fork — stink bug invasion pressure from adjacent farm fields and elevated deer tick activity in wooded areas.' },
    { name: 'Calverton', context: 'Semi-rural community adjacent to the Calverton National Cemetery and enterprise zone — deer tick pressure from extensive wooded areas, rodent activity near industrial properties.' },
  ],
  // ── NASSAU ───────────────────────────────────────────────────────────────
  'garden-city': [
    { name: 'Garden City South', context: 'Original planned community with early 20th century Colonial and Tudor homes — elevated subterranean termite risk in aging wood construction and mature tree-adjacent carpenter ant activity.' },
    { name: 'Stewart Manor', context: 'Quiet village community adjacent to Garden City — older homes with mature landscaping see annual carpenter ant and occasional termite activity.' },
    { name: 'Garden City Park', context: 'Residential community bordering the Garden City border — standard Nassau County pest pressure with elevated tick activity from the Nassau Boulevard greenbelt.' },
  ],
  'hempstead': [
    { name: 'Hempstead Village', context: 'Dense urban center with older commercial and residential buildings — significant rodent pressure in waste corridors and German cockroach activity in restaurant establishments.' },
    { name: 'West Hempstead', context: 'Residential community adjacent to the village — standard suburban pest pressure from mice, ants, and termites in 1950s–1960s housing stock.' },
    { name: 'Baldwin', context: 'South Shore community with South Shore wetland proximity — elevated summer mosquito pressure and moisture ant activity in homes near drainage corridors.' },
  ],
  'great-neck': [
    { name: 'Great Neck Plaza', context: 'Active village commercial center with dense restaurant and retail activity — rodent pressure in commercial waste areas and German cockroach activity in food establishments.' },
    { name: 'Kings Point', context: 'Waterfront estate community on Long Island Sound — deer tick exposure from wooded estate properties and rodent activity near harbor-facing buildings.' },
    { name: 'Great Neck Estates', context: 'Exclusive residential community with large estate lots — carpenter ant activity from mature trees adjacent to older homes, elevated deer tick exposure.' },
  ],
  'freeport': [
    { name: 'Freeport Village', context: 'Active downtown with restaurants and retail — German cockroach and rodent pressure in commercial corridors that extends into nearby residential streets.' },
    { name: 'Baldwin Harbor', context: 'Waterfront canal community — elevated summer mosquito activity from tidal wetlands and persistent Norway rat activity near boat storage areas.' },
    { name: 'Merrick', context: 'South Shore community with waterway network — elevated mosquito and moisture pest activity from Merrick Creek and drainage corridors.' },
  ],
  'massapequa': [
    { name: 'Massapequa', context: 'Established 1950s–1960s neighborhood bordering Massapequa Lake — elevated summer mosquito activity from lake and marsh areas, standard termite pressure in aging housing.' },
    { name: 'Massapequa Park', context: 'Village bordering the Massapequa Preserve — elevated deer tick exposure from preserve wildlife corridor, standard suburban pest pressure.' },
    { name: 'Old Bethpage', context: 'Semi-rural community adjacent to Old Bethpage Village Restoration — deer tick pressure from agricultural and wooded areas, stink bug activity in fall.' },
  ],
  'long-beach': [
    { name: 'Long Beach City', context: 'Dense barrier island city with apartment buildings and year-round residents — German cockroach activity in older apartment stock, bed bug spread in high-turnover buildings.' },
    { name: 'Lido Beach', context: 'Oceanfront community with seasonal and year-round mix — salt marsh mosquito pressure from Reynolds Channel wetlands, moisture ants in beachfront properties.' },
    { name: 'Atlantic Beach', context: 'Affluent barrier island community — elevated mosquito pressure from Reynolds Channel and occasional Norway rat activity near marina areas.' },
  ],
  'rockville-centre': [
    { name: 'Rockville Centre Village', context: 'Active village with historic homes and busy downtown — subterranean termite risk in older architecture, rodent pressure in restaurant waste areas.' },
    { name: 'South Hempstead', context: 'Residential community adjacent to the village — standard Nassau County pest pressure from mice, ants, and termites in aging suburban housing.' },
    { name: 'Lynbrook Border', context: 'Transition area between Rockville Centre and Lynbrook — carpenter ant activity from shared mature street trees, annual fall mouse invasions.' },
  ],
  // ── QUEENS ───────────────────────────────────────────────────────────────
  'flushing': [
    { name: 'Downtown Flushing', context: 'Extremely dense commercial center with extensive restaurant activity — intense German cockroach and rodent pressure in food corridors, bed bugs in adjacent high-turnover apartment buildings.' },
    { name: 'Murray Hill', context: 'Residential area adjacent to downtown — rodent and cockroach pressure from commercial corridor activity extends into residential buildings.' },
    { name: 'College Point', context: 'Peninsula community with industrial history and residential development — rodent pressure from legacy industrial areas, mosquito activity from Flushing Bay shoreline.' },
  ],
  'astoria': [
    { name: 'Astoria Heights', context: 'Elevated residential area with older attached homes — mouse activity through aging foundations, carpenter ant pressure from mature street trees.' },
    { name: 'Ditmars-Steinway', context: 'Dense commercial and residential corridor — German cockroach and rodent pressure from restaurant activity along Ditmars Boulevard and Steinway Street.' },
    { name: 'Long Island City Border', context: 'Industrial transition zone with rapid residential development — legacy rodent pressure from industrial properties entering newly converted residential buildings.' },
  ],
  'jamaica': [
    { name: 'Jamaica Hills', context: 'Hillside residential community with older detached homes — standard urban pest pressure from mice and cockroaches, occasional termite activity in aging housing.' },
    { name: 'South Jamaica', context: 'Dense residential area with older housing stock — German cockroach activity in multi-family buildings, rodent pressure near commercial corridors.' },
    { name: 'St. Albans', context: 'Established residential community — standard suburban pest pressure from mice and carpenter ants in post-war housing, bed bug activity in rental buildings.' },
  ],
  'forest-hills': [
    { name: 'Forest Hills Gardens', context: 'Historic planned community with Tudor and English cottage architecture — moisture ants and silverfish in damp basement areas, carpenter ant activity in attached woodwork.' },
    { name: 'Rego Park', context: 'Mid-rise apartment corridor along Queens Boulevard — German cockroach and bed bug spread through building infrastructure in 1950s–1970s residential towers.' },
    { name: 'Kew Gardens Hills', context: 'Residential community with detached homes — standard urban-suburban pest pressure from mice and ants, occasional subterranean termite activity in older foundations.' },
  ],
  'jackson-heights': [
    { name: 'Jackson Heights', context: "1930s cooperative garden apartment buildings with extensive shared infrastructure — German cockroach and bed bug spread through building utilities, iconic architecture requiring careful treatment." },
    { name: 'Elmhurst', context: 'Dense commercial and residential area — intense rodent and cockroach pressure from food market corridors along Queens Boulevard and Broadway.' },
    { name: 'East Elmhurst', context: 'Residential community adjacent to LaGuardia Airport — rodent pressure from airport-adjacent commercial food service, standard urban pest pressure in residential areas.' },
  ],
  'howard-beach': [
    { name: 'Howard Beach', context: 'Jamaica Bay waterfront community — elevated mosquito activity from tidal wetlands, Norway rat activity along bulkhead areas, moisture pest issues in waterfront homes.' },
    { name: 'Ozone Park', context: 'Adjacent residential community with JFK Airport influence — elevated rodent pressure from airport corridor commercial activity, standard urban pest pressure.' },
    { name: 'Old Howard Beach', context: 'Older section with original mid-century homes — subterranean termite and carpenter ant activity in aging housing stock adjacent to Jamaica Bay.' },
  ],
};
