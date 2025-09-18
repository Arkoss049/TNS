/* ---------- Caisses helpers ---------- */
const same_0_eur = {
  maladie:{ ro_kind:"pl_caisse", cpam:{carence_j:3, max_j:90, f:"cpam_1_730e"}, caisse:{start_j:91, kind:"fixed", ij_j:0, max_j:1095} },
  atmp:{    ro_kind:"pl_caisse", cpam:{carence_j:3, max_j:90, f:"cpam_1_730e"}, caisse:{start_j:91, kind:"fixed", ij_j:0, max_j:1095} },
  autre:{   ro_kind:"pl_caisse", cpam:{carence_j:3, max_j:90, f:"cpam_1_730e"}, caisse:{start_j:91, kind:"fixed", ij_j:0, max_j:1095} }
};

/* ---------- Catalogue complet ---------- */
const CATALOG = {
  formulas: {
    cpam_1_730e: { kind:"formula", note:"IJ = 1/730e (CPAM, PL J4–J90)", min_j: 25.80, max_j: 193.56 },
    ssi_1_730e:  { kind:"formula", note:"IJ = 1/730e (SSI, min 25,80 – max 64,52 ; micro <10% PASS ⇒ 0)", min_j: 25.80, max_j: 64.52 }
  },
  profs: [
    { id:'lib_nr', label:'PL non réglementée (URSSAF)', group:'PL', regime:'pl_urssaf',
      ro: {
        maladie:{ ro_kind:'pl_caisse', cpam:{carence_j:3, max_j:90, f:'cpam_1_730e'}, caisse:{} },
        atmp:   { ro_kind:'pl_caisse', cpam:{carence_j:3, max_j:90, f:'cpam_1_730e'}, caisse:{} },
        autre:  { ro_kind:'pl_caisse', cpam:{carence_j:3, max_j:90, f:'cpam_1_730e'}, caisse:{} } 
      },
      micro:{ kind:'bnc', coef:0.66 }
    },

    { id:"ssi_artisan", label:"Artisan (SSI)", ro:{
      maladie:{ ro_kind:"formula", f:"ssi_1_730e", carence_j:3, max_j:360, affil_min:365 },
      atmp:{    ro_kind:"formula", f:"ssi_1_730e", carence_j:3, max_j:360, affil_min:365 },
      autre:{   ro_kind:"formula", f:"ssi_1_730e", carence_j:3, max_j:360, affil_min:365 }
    }},
    { id:"ssi_commercant", label:"Commerçant (SSI)", ro:{
      maladie:{ ro_kind:"formula", f:"ssi_1_730e", carence_j:3, max_j:360, affil_min:365 },
      atmp:{    ro_kind:"formula", f:"ssi_1_730e", carence_j:3, max_j:360, affil_min:365 },
      autre:{   ro_kind:"formula", f:"ssi_1_730e", carence_j:3, max_j:360, affil_min:365 }
    }},

    { id:"lib_carmf", label:"Médecin (CARMF)", ro:{
      maladie:{ ro_kind:"pl_caisse", cpam:{carence_j:3, max_j:90, f:"cpam_1_730e"},
        caisse:{start_j:91, kind:"piecewiseAge", max_j:1095,
          bands:[
            {rev_max:47100, base:64.52},
            {rev_max:141300, f:"cpam_1_730e"},
            {rev_max:Infinity, base:193.56}
          ] } },
      atmp:{ ro_kind:"pl_caisse", cpam:{carence_j:3, max_j:90, f:"cpam_1_730e"},
        caisse:{start_j:91, kind:"piecewiseAge", max_j:1095,
          bands:[
            {rev_max:47100, base:64.52},
            {rev_max:141300, f:"cpam_1_730e"},
            {rev_max:Infinity, base:193.56}
          ] } },
      autre:{ ro_kind:"pl_caisse", cpam:{carence_j:3, max_j:90, f:"cpam_1_730e"},
        caisse:{start_j:91, kind:"piecewiseAge", max_j:1095,
          bands:[
            {rev_max:47100, base:64.52},
            {rev_max:141300, f:"cpam_1_730e"},
            {rev_max:Infinity, base:193.56}
          ] } }
    }},

    { id:"lib_carpimko", label:"Paramédical (CARPIMKO)", ro:{
      maladie:{ ro_kind:"pl_caisse", cpam:{carence_j:3, max_j:90, f:"cpam_1_730e"}, caisse:{start_j:91, kind:"fixed", ij_j:55.44, max_j:1095} },
      atmp:{    ro_kind:"pl_caisse", cpam:{carence_j:3, max_j:90, f:"cpam_1_730e"}, caisse:{start_j:91, kind:"fixed", ij_j:55.44, max_j:1095} },
      autre:{   ro_kind:"pl_caisse", cpam:{carence_j:3, max_j:90, f:"cpam_1_730e"}, caisse:{start_j:91, kind:"fixed", ij_j:55.44, max_j:1095} }
    }},

    { id:"lib_carcdsf_dent", label:"Chir.-dentiste (CARCDSF)", ro:{
      maladie:{ ro_kind:"pl_caisse", cpam:{carence_j:3, max_j:90, f:"cpam_1_730e"}, caisse:{start_j:91, kind:"fixed", ij_j:111.00, max_j:1095} },
      atmp:{    ro_kind:"pl_caisse", cpam:{carence_j:3, max_j:90, f:"cpam_1_730e"}, caisse:{start_j:91, kind:"fixed", ij_j:111.00, max_j:1095} },
      autre:{   ro_kind:"pl_caisse", cpam:{carence_j:3, max_j:90, f:"cpam_1_730e"}, caisse:{start_j:91, kind:"fixed", ij_j:111.00, max_j:1095} }
    }},

    { id:"lib_cavec", label:"Expert-comptable / CAC (CAVEC)", ro:{
      maladie:{ ro_kind:"pl_caisse", cpam:{carence_j:3, max_j:90, f:"cpam_1_730e"}, caisse:{start_j:91, kind:"fixed", ij_j:125.00, max_j:1095} },
      atmp:{    ro_kind:"pl_caisse", cpam:{carence_j:3, max_j:90, f:"cpam_1_730e"}, caisse:{start_j:91, kind:"fixed", ij_j:125.00, max_j:1095} },
      autre:{   ro_kind:"pl_caisse", cpam:{carence_j:3, max_j:90, f:"cpam_1_730e"}, caisse:{start_j:91, kind:"fixed", ij_j:125.00, max_j:1095} }
    }},

    { id:"lib_cipav", label:"Prof. libérale (CIPAV)", ro: {...same_0_eur}},
    { id:"lib_cavp", label:"Pharmacien (CAVP)", ro: {...same_0_eur}},
    { id:"lib_carpv", label:"Vétérinaire (CARPV)", ro: {...same_0_eur}},
    { id:"lib_cavamac", label:"Agent général (CAVAMAC)", ro: {...same_0_eur}},
    { id:"lib_cavom", label:"Officier ministériel (CAVOM)", ro: {...same_0_eur}},
    { id:"lib_cprn", label:"Notaire (CPRN)", ro: {...same_0_eur}},

    { id:"cnbf_avocat", label:"Avocat (CNBF)", ro:{
      maladie:{ ro_kind:"fixed", ij_j:90.00, carence_j:90, max_j:1095 },
      atmp:{    ro_kind:"fixed", ij_j:90.00, carence_j:90, max_j:1095 },
      autre:{   ro_kind:"fixed", ij_j:90.00, carence_j:90, max_j:1095 }
    }},

    { id:"msa_exploitant", label:"Exploitant agricole (MSA)", ro:{
      maladie:{ ro_kind:"fixed", carence_j:3, max_j:360, piecewise_j:[{end:28, ij:25.79}, {start:29, ij:34.39}] },
      atmp:{    ro_kind:"fixed", carence_j:29, max_j:1095 },
      autre:{   ro_kind:"fixed", carence_j:3,  max_j:360 }
    }}
  ]
};

/* ---------- Utils ---------- */
const F0 = new Intl.NumberFormat('fr-FR',{style:'currency',currency:'EUR',maximumFractionDigits:0});
const F2 = new Intl.NumberFormat('fr-FR',{style:'currency',currency:'EUR',maximumFractionDigits:2});
const $ = id => document.getElementById(id);
function parseEuro(v){ if(v===null||v===undefined) return 0; if(typeof v==='number') return v; let s=(''+v).trim().replace(/[€$£₤]/g,'').replace(/[\u00A0\u202F\u2009\s]/g,'').replace(/,/g,'.'); const p=s.split('.'); if(p.length>2){ const d=p.pop(); s=p.join('')+'.'+d; } const x=parseFloat(s); return Number.isFinite(x)?x:0; }
function clamp(val, min, max) { return Math.min(Math.max(val, min), max); }
function coveredDays(afterDays, m, maxDays = Infinity, startOffsetDay = 0) { const dim=[31,28,31,30,31,30,31,31,30,31,30,31]; let monthStartDay=startOffsetDay; for(let k=0;k<m;k++){ monthStartDay+=dim[k%12]; } const monthEndDay=monthStartDay+dim[m%12]; const a=Math.max(afterDays, monthStartDay); const b=Math.min(maxDays, monthEndDay); return Math.max(0, b-a); }

// Fonction pour gérer les IJ
function currentIJjForMonth(m, cpam_c, cpamMax, cpamIJ, caisseStart, caisseIJ){ 
  const dCpam=coveredDays(cpam_c, m, cpamMax); 
  const dCaisse=coveredDays(caisseStart, m, Infinity); 
  if(dCpam===0 && dCaisse>0) return caisseIJ; 
  if(dCpam>0 && dCaisse===0) return cpamIJ; 
  const tot=dCpam+dCaisse; 
  return tot? (cpamIJ*dCpam + caisseIJ*dCaisse)/tot : 0; 
}

/* ---------- État & persistance ---------- */
const I={
  profession:$('profession'), scenario:$('scenario'), age:$('age'),
  salaireM:$('salaireM'), chargesM:$('chargesM'),
  cibleM:$('cibleM'), cibleSame:$('cibleSame'),
  carenceCreation:$('carenceCreation'),
  affiliationCheck:$('affiliation-check'),
  microEntrepriseCheck:$('microEntrepriseCheck'),
  microEntrepriseBlock:$('micro-entreprise-block'), microAct:$('microAct'), microCA:$('microCA'), microSummary:$('microSummary'),
  franchiseMod:$('franchiseMod'), plafondMod:$('plafondMod'), ijModCustom:$('ijModCustom'), modAuto:$('modAuto'),
  horizon:$('horizon'),
  btnView:$('btnView'), chart:$('chart'),
  vA1Avec:$('vA1Avec'), vA1Reste:$('vA1Reste'), vA1Sans:$('vA1Sans'),
  kA1Avec:$('kA1Avec'), kA1Reste:$('kA1Reste'), kA1Sans:$('kA1Sans'),
  bCarence:$('bCarence'), bIJRO:$('bIJRO'), bMax:$('bMax'),
  bFranchise:$('bFranchise'), bCible:$('bCible'),
  paveMetier:$('paveMetier'),
  warn:$('warn'), modHint:$('modHint')
};
let viewByYear=false, chartInstance=null;
let zoomMode='full', daltonien=false;

const STORAGE_KEY='simu_tns_v2.5';
const DEFAULT_STATE={ profession:'ssi_artisan', scenario:'maladie', age:'45', salaireM:'3000', chargesM:'2000', cibleM:'', cibleSame:true, carenceCreation:'0', affiliationCheck:false, microEntrepriseCheck:false, microAct:'bic_vente', microCA:'', franchiseMod:'15', plafondMod:'', ijModCustom:'', modAuto:true, horizon:'60', arretJours: '30' };
function loadState(){ try{ const raw=localStorage.getItem(STORAGE_KEY); if(!raw) return DEFAULT_STATE; return {...DEFAULT_STATE, ...JSON.parse(raw)}; }catch(e){ return DEFAULT_STATE; } }
function saveState(){ try{ const s={ profession:I.profession?.value, scenario:I.scenario?.value, age:I.age?.value, salaireM:I.salaireM?.value, chargesM:I.chargesM?.value, cibleM:I.cibleM?.value, cibleSame:!!I.cibleSame?.checked, carenceCreation:I.carenceCreation?.value, affiliationCheck:!!I.affiliationCheck?.checked, microEntrepriseCheck:!!I.microEntrepriseCheck?.checked, microAct:I.microAct?.value, microCA:I.microCA?.value, franchiseMod:I.franchiseMod?.value, plafondMod:I.plafondMod?.value, ijModCustom:I.ijModCustom?.value, modAuto:!!I.modAuto?.checked, horizon:I.horizon?.value, arretJours:I.arretJours?.value }; localStorage.setItem(STORAGE_KEY, JSON.stringify(s)); }catch(e){} }

// Fonction pour déterminer le texte d'aide pour les règles de calcul
function ruleText(prof, scen, annualRef, isMicro){
  const roCfg = prof.ro[scen];
  if(!roCfg) return "Pas de règle disponible";

  const age = parseInt(document.getElementById("age")?.value || "40", 10);

  if(roCfg.ro_kind === 'formula'){
    if(roCfg.f === 'cpam_1_730e'){
      return "CPAM : 1/730 du revenu annuel (25,80 €/j – 193,56 €/j), versée du 4e au 90e jour";
    }
    if(roCfg.f === 'ssi_1_730e'){
      return "SSI : 1/730 du revenu annuel (25,80 €/j – 64,52 €/j), micro-entreprise <10 % PASS = pas d’indemnité";
    }
  }

  if(roCfg.ro_kind === 'fixed' || roCfg.caisse?.kind === 'fixed'){
    return `Forfait : ${roCfg.ij_j || roCfg.caisse?.ij_j} €/jour à partir du jour ${roCfg.caisse?.start_j || 91}`;
  }

  if(roCfg.ro_kind === 'pl_caisse'){
    let txt = "CPAM : 1/730 du revenu (25,80 – 193,56 €/j) du J4 au J90";
    if(roCfg.caisse){
      if(roCfg.caisse.kind === 'fixed'){
        txt += ` • ${prof.label} : forfait ${roCfg.caisse.ij_j} €/j du J${roCfg.caisse.start_j || 91} au J${roCfg.caisse.max_j || 1095}`;
      }
      if(roCfg.caisse.kind === 'piecewise'){
        txt += ` • ${prof.label} : barème selon revenu (≤47 100 € = 64,52 €/j ; ≤141 300 € = 1/730 revenu ; >141 300 € = 193,56 €/j)`;
      }
      if(roCfg.caisse.kind === 'piecewiseAge'){
        txt += ` • ${prof.label} : barème selon revenu (≤47 100 € = 64,52 €/j ; ≤141 300 € = 1/730 revenu ; >141 300 € = 193,56 €/j)`;
        if(age >= 70){
          txt += " (70 ans et plus : 50 % du barème)";
        } else if(age >= 62){
          txt += " (62–69 ans : 1ʳᵉ année = 100 %, 2ᵉ = 75 %, 3ᵉ = 50 %)";
        } else {
          txt += " (<62 ans : taux plein)";
        }
      }
      if(roCfg.caisse.kind === 'piecewise_j'){
        txt += " • Montant variable selon la durée de l’arrêt (ex. 25,79 €/j jusqu’au J28 puis 34,39 €/j)";
      }
    } else {
      txt += " • pas de couverture après J90";
    }
    return txt;
  }

  return "Règle non définie";
}


/* ---------- Calculs RO / Mod ---------- */
function ijFromFormula(name, annualRef, isMicro=false){
  const f=CATALOG.formulas[name];
  if(!f) return 0;
  if (name==='ssi_1_730e' && isMicro && annualRef<4710) return 0; // <10% PASS
  let ij=(annualRef||0)/730;
  let min=f.min_j;
  if(name==='ssi_1_730e' && isMicro){ min=0; }
  return clamp(ij, min, f.max_j);
}

function computeROMonth(m, prof, scen, annualRef, carenceCreation, isAffiliationOK, isMicro){
  const p=CATALOG.profs.find(x=>x.id===prof);
  const cfg=p?.ro?.[scen];
  if(!cfg){ return {roM:0,roIJj:0,carence:0,max:0,warn:true,cpamM:0,caisseProM:0}; }
  
  // Affiliation < 12 mois : pas de droits
  if (!isAffiliationOK){ 
    const baseCar = Number(cfg.carence_j || 0) + Number(carenceCreation || 0);
    const baseMax = Number(cfg.max_j || 0) + Number(carenceCreation || 0);
    const fallbackMax = baseMax > baseCar ? baseMax : (90 + Number(carenceCreation || 0));
    return { roM:0, roIJj:0, carence:baseCar, max:fallbackMax, warn:false, cpamM:0, caisseProM:0 };
  }

  annualRef = (annualRef||0); 
  const extra = Math.max(0, parseInt(I.carenceCreation?.value)||0); 
  const roConfig = cfg; 
  const hasCpam = (roConfig.cpam != null);

  if(roConfig.ro_kind==='formula'){ 
    const ijj=ijFromFormula(roConfig.f, annualRef, isMicro); 
    const d=coveredDays((roConfig.carence_j||0)+extra, m, (roConfig.max_j||0)+extra); 
    const roM=d*ijj; 
    return {roM, roIJj:ijj, carence:(roConfig.carence_j||0)+extra, max:(roConfig.max_j||0)+extra, warn:false, cpamM:hasCpam?roM:0, caisseProM:hasCpam?0:roM}; 
  }

  if(roConfig.ro_kind==='fixed'){
    if (p.id==='cnbf_avocat'){ 
      const d=coveredDays((roConfig.carence_j||0)+extra, m, (roConfig.max_j||0)+extra); 
      const roM=d*90; 
      return {roM, roIJj:90, carence:(roConfig.carence_j||0)+extra, max:(roConfig.max_j||0)+extra, warn:false, cpamM:0, caisseProM:roM}; 
    }
    if (p.id==='msa_exploitant' && roConfig.piecewise_j){ 
      const start=(roConfig.carence_j||0)+extra; 
      const end=(roConfig.max_j||Infinity)+extra; 
      const d1=coveredDays(start, m, Math.min(start+28, end)); 
      const d2=coveredDays(start+28, m, end); 
      const roM=d1*25.79 + d2*34.39; 
      const roIJj=(d1+d2)?(roM/(d1+d2)):0; 
      return {roM, roIJj, carence:start, max:end, warn:false, cpamM:roM, caisseProM:0}; 
    }
    const ijj=roConfig.ij_j ?? 0; 
    const d=coveredDays((roConfig.carence_j||0)+extra, m, (roConfig.max_j||0)+extra); 
    const roM=d*ijj; 
    return {roM, roIJj:ijj, carence:(roConfig.carence_j||0)+extra, max:(roConfig.max_j||0)+extra, warn:false, cpamM:hasCpam?roM:0, caisseProM:hasCpam?0:roM};
  }

  if(roConfig.ro_kind==='pl_caisse'){
    const cpam_c=(roConfig.cpam?.carence_j ?? 3)+extra;
    const cpam_ij=ijFromFormula(roConfig.cpam?.f || 'cpam_1_730e', annualRef, isMicro);
    const cpamMax=(Number.isFinite(roConfig.cpam?.max_j)?roConfig.cpam.max_j:90)+extra;
    const cpamDays=coveredDays(cpam_c, m, cpamMax); const cpamM=cpamDays*cpam_ij;

    const caisse=roConfig.caisse||{}; 
    const isCaisseDefined = Object.keys(caisse).length > 0;
    
    let caisseS = 0;
    let caisseE = 0;
    let caisseIJ = 0;

    if (isCaisseDefined) {
      caisseS = (caisse.start_j || 91) + extra;
      caisseE = (caisse.max_j || 1095) + extra;
      if(caisse.kind === 'fixed'){
        caisseIJ = caisse.ij_j ?? 0;
      } else if(caisse.kind === 'piecewiseAge'){
        const age = parseInt(I.age?.value)||40;
        let ijBase = 0;
        let found = null;
        for(const b of caisse.bands){
          if(annualRef <= b.rev_max){ found = b; break; }
        }
        if(found){
          ijBase = found.base !== undefined 
                     ? found.base 
                     : ijFromFormula(found.f, annualRef, isMicro);
          
          if(age >= 70){
            caisseIJ = ijBase * 0.5;
          } else if(age >= 62){
            if(m < 12){ caisseIJ = ijBase; }
            else if(m < 24){ caisseIJ = ijBase * 0.75; }
            else { caisseIJ = ijBase * 0.5; }
          } else {
            caisseIJ = ijBase;
          }
        }
      } else if(caisse.kind === 'piecewise'){
        let found = null;
        for(const b of caisse.bands){
          if(annualRef <= b.rev_max){ found = b; break; }
        }
        caisseIJ = found ? (found.ij_j !== undefined ? found.ij_j : ijFromFormula(found.f, annualRef, isMicro)) : 0;
      }
    } else {
      caisseS = cpamMax + 1;
      caisseE = cpamMax;
      caisseIJ = 0;
    }
    const caisseDays=coveredDays(caisseS, m, caisseE); 
    const caisseM=caisseDays*(caisseIJ||0);
    
    const roIJj=currentIJjForMonth(m, cpam_c, cpamMax, cpam_ij, caisseS, caisseIJ);
    return { roM: cpamM + caisseM, roIJj, carence: cpam_c, max: Math.max(cpamMax, caisseE), warn:false, cpamM, caisseProM: caisseM };
  }

  return { roM:0, roIJj:0, carence:0, max:0, warn:true, cpamM:0, caisseProM:0 };
}


/* ---------- Chart ---------- */
function aggregateYearly(series, months){ const years=Math.ceil(months/12); const out=new Array(years).fill(0); for(let y=0;y<years;y++){ const s=y*12, e=Math.min((y+1)*12, months); const slice=series.slice(s,e); out[y]=slice.length? slice.reduce((a,b)=>a+b,0)/slice.length : 0; } return out; }

function drawChart({months, cpam, caissePro, mod, charges, cible, sans, avec}){
  const selectedProf = CATALOG.profs.find(p=>p.id===I.profession.value);
  const caisseName = selectedProf?.label.match(/\((.*?)\)/)?.[1] || "Caisse pro";

  const labelsM=[...Array(months)].map((_,i)=>`M${i+1}`);
  let L=labelsM, CPAM=cpam, CAISSE=caissePro, MOD=mod, CH=charges, CI=cible, SN=sans, AV=avec;
  if(viewByYear){ const Y=Math.ceil(months/12); L=[...Array(Y)].map((_,i)=>`A${i+1}`); const agg=a=>aggregateYearly(a, months); CPAM=agg(cpam); CAISSE=agg(caissePro); MOD=agg(mod); CH=agg(charges); CI=agg(cible); SN=agg(sans); AV=agg(avec); }
  if(chartInstance) chartInstance.destroy();
  const ctx2=($('chart')||{}).getContext ? $('chart').getContext('2d') : null;
  if(!ctx2) return;
  const maxV=Math.max(0, ...CPAM, ...CAISSE, ...MOD, ...CH, ...CI, ...SN, ...AV);
  const yMax=Math.max(500, Math.ceil((maxV*1.2)/100)*100);

  chartInstance=new Chart(ctx2,{
    type:'bar',
    data:{ labels:L, datasets:[
      {label:'RO (CPAM)', data:CPAM, stack:'rev', borderWidth:1, borderRadius:6, backgroundColor:'#6ae3ff'},
      {label:`RO (${caisseName})`, data:CAISSE, stack:'rev', borderWidth:1, borderRadius:6, backgroundColor:'#449fbe'},
      {label:'Moduvéo PRO', data:MOD, stack:'rev', borderWidth:1, borderRadius:6, backgroundColor:'#80f2a1'},
      {label:'Charges fixes', data:CH, type:'line', borderDash:[6,6], pointRadius:0, tension:0, yAxisID:'y1', borderColor:'#ffd166'},
      {label:'Salaire cible', data:CI, type:'line', pointRadius:0, tension:.2, yAxisID:'y1', borderColor:'#ffffff'},
      {label:'RO seul (sans contrat)', data:SN, type:'line', pointRadius:0, tension:.2, yAxisID:'y1', borderColor:'#9bb1c9'}
    ]},
    options:{
      responsive:true,
      maintainAspectRatio:false,
      interaction:{mode:'index',intersect:false},
      scales:{
        x:{stacked:true, ticks:{color:'#aabed6'}},
        y:{stacked:true, min:0, max:yMax, ticks:{color:'#aabed6', callback:v=>F0.format(v)}},
        y1:{stacked:false, min:0, max:yMax, ticks:{display:false}, grid:{drawOnChartArea:false}}
      }
    }
  });
}

/* ---------- Simulation (définie AVANT bindUI) ---------- */
function simulate(){
  if (!I.salaireM?.value || !I.chargesM?.value){
    if(I.warn){ I.warn.textContent="⚠️ Veuillez renseigner le salaire net et les charges fixes."; I.warn.classList.add('show'); }
    return;
  }
  if(I.warn) I.warn.classList.remove('show');

  const profId=I.profession.value, scen=I.scenario.value;
  const salaireM=parseEuro(I.salaireM.value)||0, chargesM=parseEuro(I.chargesM.value)||0;
  const cibleM = I.cibleSame?.checked ? salaireM : (parseEuro(I.cibleM.value)||0);
  const cibleJ=cibleM/30;
  const carenceCreation=Math.max(0, parseInt(I.carenceCreation?.value)||0);
  const isAffiliationOK = !(I.affiliationCheck && I.affiliationCheck.checked);
  const isMicro = I.microEntrepriseCheck && I.microEntrepriseCheck.checked;
  const franchiseMod=Math.max(0, parseInt(I.franchiseMod?.value)||0);
  const plaf=parseEuro(I.plafondMod?.value)||0;
  const modAuto=!!I.modAuto?.checked;
  const ijModCustom=parseEuro(I.ijModCustom?.value)||0;
  const horizonM=Math.max(1, parseInt(I.horizon?.value)||60);
  const modEnabled = $('modToggle') ? !!$('modToggle').checked : true;

  // Annual reference income
  let annualRef = salaireM * 12;
  let microNote = '';
  // Micro éligible : SSI + toutes les professions libérales (lib_*) sauf liste noire
  const libBlacklist = ['lib_cprn','cnbf_avocat']; // notaire, avocat
  const eligibleMicro = (profId.startsWith('ssi_') || profId.startsWith('lib_')) && !libBlacklist.includes(profId);

  if (isMicro && eligibleMicro){
    const ca = parseEuro(I.microCA?.value)||0;
    const coef = (I.microAct?.value==='bic_vente') ? 0.29 : (I.microAct?.value==='bic_services') ? 0.50 : 0.66;
    const retenu = ca * coef;
    annualRef = retenu;
    microNote = `CA ${F0.format(ca)} → revenu retenu ${F0.format(retenu)}/an`;
    if (I.microSummary) I.microSummary.textContent = microNote;
  } else {
    if (I.microSummary) I.microSummary.textContent = '';
  }

  // Contexte pour la frise & calculs
  const ctx={
    profId, scen, salaireM, chargesM, cibleM, cibleJ,
    carenceCreation, isAffiliationOK, isMicro,
    mod:{ franchise:franchiseMod, plafond:plaf, max_j:1095, auto:modAuto, custom:ijModCustom, enabled:modEnabled },
    horizonM, annualRef
  };

  // Séries mensuelles
  const M = horizonM;
  const modSeries = [];
  const ro=[],sans=[],avec=[],cpam=[],caissePro=[];
  let anyWarn=false,carence=0,ijro=0,max=0;

  const selectedProf=CATALOG.profs.find(p=>p.id===profId);
  if(!selectedProf || !selectedProf.ro || !selectedProf.ro[scen]) return;

  for(let m=0;m<M;m++){
    const r=computeROMonth(m, profId, scen, annualRef, carenceCreation, isAffiliationOK, isMicro);
    let ijModj=modAuto ? Math.max(0, (cibleJ - r.roIJj)) : Math.max(0, ijModCustom);
    if(plaf>0) ijModj=Math.min(ijModj, plaf);
    if(!modEnabled) ijModj=0;
    const dMod=coveredDays(franchiseMod, m, 1095);
    const modM=dMod*ijModj;

    ro.push(r.roM); modSeries.push(modM); sans.push(r.roM); avec.push(r.roM+modM); cpam.push(r.cpamM); caissePro.push(r.caisseProM);
    if(m===0){carence=r.carence; ijro=r.roIJj; max=r.max;}
    if(r.warn) anyWarn=true;
  }

  // Affichage/mode micro : montrer ou cacher le bloc en fonction de l'éligibilité
  if (I.microEntrepriseBlock) I.microEntrepriseBlock.style.display = eligibleMicro ? 'flex' : 'none';
  const hb = $('microHelp'); if (hb) hb.style.display = eligibleMicro ? 'inline-flex' : 'none';

  const charges = new Array(M).fill(chargesM), cible = new Array(M).fill(cibleM);
  const A1=Math.min(12,M), mean=a=>a.slice(0,A1).reduce((x,t)=>x+t,0)/A1, kAvec=mean(avec), kSans=mean(sans), kReste=kAvec-chargesM, kManqueSans=Math.max(0, chargesM-kSans);
  if($('vA1Avec')) $('vA1Avec').textContent=F0.format(kAvec)+'/mois'; 
  if($('vA1Reste')) $('vA1Reste').textContent=F0.format(kReste)+'/mois'; 
  if($('vA1Sans'))  $('vA1Sans').textContent=F0.format(kManqueSans)+'/mois';
  if($('kA1Avec')) $('kA1Avec').className='kpi '+(kAvec>=chargesM?'ok':'bad'); 
  if($('kA1Reste')) $('kA1Reste').className='kpi '+(kReste>=0?'ok':'bad'); 
  if($('kA1Sans'))  $('kA1Sans').className='kpi '+(kManqueSans===0?'ok':'bad');

  let carenceInfo=`Carence RO : ${carence} j`; if(carenceCreation>0) carenceInfo+=` (incl. création ${carenceCreation} j)`;
  if($('bCarence')) $('bCarence').textContent=carenceInfo; 
  if($('bIJRO')) $('bIJRO').textContent=`IJ RO : ${F2.format(ijro)}/j`; 
  if($('bMax')) $('bMax').textContent=`Durée max RO : ${max} j`; 
  if($('bFranchise')) $('bFranchise').textContent=`Franchise Moduvéo : ${franchiseMod} j`; 
  if($('bCible')) $('bCible').textContent=`Salaire cible : ${F0.format(cibleM)}/mois`;
  if(I.warn) I.warn.classList.toggle('show', !!anyWarn);
  if($('modHint')) $('modHint').textContent = modAuto ? `Suggestion automatique ≈ ${F2.format(Math.max(0, cibleJ - ijro))}/j` : `Montant manuel Moduvéo: ${F2.format(ijModCustom)}/j`;

  drawChart({months:M, cpam, caissePro, mod: modSeries, charges, cible, sans, avec});

  const roCfg=selectedProf.ro[scen];
  const caisseName = selectedProf.label.match(/\((.*?)\)/)?.[1] || 'Caisse pro';
  let sous=roCfg?.cpam ? `CPAM J${(roCfg.cpam.carence_j||0)+1}–J${roCfg.cpam.max_j}` : 'Pas de prise en charge CPAM';
  if (roCfg?.caisse?.kind){
    sous += roCfg.caisse.kind==='fixed' ? ` • ${caisseName} J${roCfg.caisse.start_j || 91}+` : ` • ${caisseName} (barème) J${roCfg.caisse.start_j || 91}+`;
  } else if(roCfg?.ro_kind==='pl_caisse' && !roCfg?.caisse){
    sous+=' • Pas de couverture après J90';
  }
  if($('paveMetier')) $('paveMetier').textContent=`${selectedProf.label} — scénario ${scen} • ${sous}`;

  renderPave(ctx, {carence, max, ijro});
  saveState();

  // ---- Sous-lignes KPI (breakdown + couverture) ----
  (function(){
    const A1 = Math.min(12, Math.max(1, parseInt(I.horizon?.value)||60));
    const mean = a => a.slice(0, A1).reduce((x,t)=>x+t,0) / A1;

    const moyAvec = mean(avec);
    const partRO  = mean(cpam) + mean(caissePro);
    const partMod = mean(modSeries);

    const salaireM = parseEuro(I.salaireM?.value)||0;
    const cibleM   = I.cibleSame?.checked ? salaireM : (parseEuro(I.cibleM?.value)||0);
    const couverture = (cibleM>0) ? Math.min(100, Math.round((moyAvec / cibleM) * 100)) : 0;

    const elBreak = $('vA1AvecBreak');
    const elCov   = $('vA1AvecCov');
    if (elBreak) elBreak.textContent = `RO ≈ ${F0.format(partRO)} / Moduvéo ≈ ${F0.format(partMod)}`;
    if (elCov)   elCov.textContent   = `Couverture : ${couverture}% du salaire cible`;

    // Pastille de statut
    const dot = $('covDot');
    if (dot){
      dot.classList.remove('ok','warn','bad');
      const variant = (moyAvec - (parseEuro(I.chargesM?.value)||0) >= 0)
                        ? 'ok'
                        : (couverture >= 60 ? 'warn' : 'bad');
      dot.classList.add(variant);
      dot.title = `Couverture ${couverture}%`;
    }
  })();
  
  // ---- Milieu : Perte de salaire (mensuelle) ----
  (function(){
    const A1 = Math.min(12, Math.max(1, parseInt(I.horizon?.value)||60));
    const mean = a => a.slice(0, A1).reduce((x,t)=>x+t,0)/A1;

    const salaireM = parseEuro(I.salaireM?.value)||0;
    const moyAvec  = mean(avec); // revenus moyens avec Moduvéo (12 mois)
    const perteMensuelle = Math.max(0, salaireM - moyAvec);

    const el = $('vPerteMensuelle');
    if (el) el.textContent = `Perte de salaire : ${F0.format(perteMensuelle)}/mois`;
  })();

  // ---- Droite : Perte de revenu totale sur N jours d'arrêt ----
  (function(){
    const jours = Math.max(1, parseInt($('arretJours')?.value)||30);
    const salaireJ = (parseEuro(I.salaireM?.value)||0)/30;

    // Reprend la logique de renderPave pour connaître qui paie à J
    const profId = I.profession.value, scen = I.scenario.value;
    // const selectedProf = CATALOG.profs.find(p=>p.id===profId);  // Ligne retirée
    if(!selectedProf) return;
    const roCfg = selectedProf.ro[scen] || {};
    const extra = Math.max(0, parseInt(I.carenceCreation?.value)||0);
    const affOK = !(I.affiliationCheck && I.affiliationCheck.checked);

    // CPAM/CAISSE phases + IJ
    const annualRefLocal = annualRef;
    const isMicroLocal = isMicro;

    let cpamS=0, cpamE=0, cpamIJ=0, caisseS=0, caisseE=0, caisseIJ=0, carence=0, maxDays=360;

    if (roCfg.ro_kind==='pl_caisse'){
      cpamS=(roCfg.cpam?.carence_j ?? 3)+extra;
      cpamE=(roCfg.cpam?.max_j ?? 90)+extra;
      cpamIJ=ijFromFormula(roCfg.cpam?.f || 'cpam_1_730e', annualRefLocal, isMicroLocal);
      const caisse=roCfg.caisse||{};
      const isCaisseDefined = Object.keys(caisse).length>0;
      if(isCaisseDefined){
        caisseS=(caisse.start_j||91)+extra;
        caisseE=(caisse.max_j||1095)+extra;
        if(caisse.kind==='fixed'){ caisseIJ=caisse.ij_j||0; }
        else if(caisse.kind==='piecewiseAge'){
          const age = parseInt(I.age?.value)||40;
          let ijBase = 0;
          let found=null; for(const b of caisse.bands){ if(annualRefLocal<=b.rev_max){ found=b; break; } }
          if(found){
             ijBase = found.base !== undefined ? found.base : ijFromFormula(found.f, annualRefLocal, isMicroLocal);
             if(age >= 70){
               caisseIJ = ijBase * 0.5;
             } else if(age >= 62){
               if(jours <= 365){ caisseIJ = ijBase; }
               else if(jours <= 730){ caisseIJ = ijBase * 0.75; }
               else { caisseIJ = ijBase * 0.5; }
             } else {
               caisseIJ = ijBase;
             }
          }
        } else if(caisse.kind==='piecewise'){
          let found=null; for(const b of caisse.bands){ if(annualRefLocal<=b.rev_max){ found=b; break; } }
          caisseIJ = found ? (found.ij_j!==undefined ? found.ij_j : ijFromFormula(found.f, annualRefLocal, isMicroLocal)) : 0;
        }
        maxDays = Math.max(cpamE, caisseE);
      } else {
        caisseS = cpamE + 1; caisseE = cpamE; caisseIJ = 0; maxDays = cpamE;
      }
      carence = (roCfg.cpam?.carence_j ?? 3)+extra;
    } else if (roCfg.ro_kind==='formula' || roCfg.ro_kind==='fixed'){
      carence = (roCfg.carence_j||0)+extra;
      maxDays = (roCfg.max_j||360)+extra;
      cpamS = carence; cpamE = maxDays;
      cpamIJ = (roCfg.ij_j ?? ijFromFormula(roCfg.f, annualRefLocal, isMicroLocal)) || 0;
      caisseS = caisseE = 0; caisseIJ = 0;
    }

    // IJ Moduvéo par jour (auto ou manuel)
    const cibleJ = (I.cibleSame?.checked ? (parseEuro(I.salaireM?.value)||0) : (parseEuro(I.cibleM?.value)||0)) / 30;
    const modEnabled = $('modToggle') ? !!$('modToggle').checked : true;
    let ijModFinal = I.modAuto?.checked ? Math.max(0, cibleJ - ( (cpamIJ>0)?cpamIJ:0 )) : Math.max(0, parseEuro(I.ijModCustom?.value)||0);
    const plaf = parseEuro(I.plafondMod?.value)||0; if(plaf>0) ijModFinal = Math.min(ijModFinal, plaf);
    const modStart = modEnabled ? Math.max(0, parseInt(I.franchiseMod?.value)||0) : Infinity;
    const modEnd   = modEnabled ? 1095 : 0;

    function roIJAt(d){
      if(!affOK) return 0;
      if(d<=carence) return 0;
      if(roCfg.ro_kind==='pl_caisse'){
        if(d>cpamS && d<=cpamE) return cpamIJ;
        if(d>caisseS && d<=caisseE) return caisseIJ;
        return 0;
      } else {
        if(d>cpamS && d<=cpamE) return cpamIJ;
        return 0;
      }
    }
    function modIJAt(d){
      return (d>modStart && d<=modEnd) ? ijModFinal : 0;
    }

    let revenuTotal = 0;
    for(let d=1; d<=jours; d++){
      revenuTotal += roIJAt(d) + modIJAt(d);
    }

    const perteTotale = Math.max(0, (salaireJ*jours) - revenuTotal);
    if($('vA1Sans')) $('vA1Sans').textContent = F0.format(perteTotale);
    // couleur du KPI droite
    if($('kA1Sans')) $('kA1Sans').className='kpi '+(perteTotale===0?'ok':'bad');
    
    // Bonus: Mettre à jour le libellé du KPI de droite
    const lbl = $('kA1Sans')?.querySelector('h3');
    if (lbl) {
      lbl.innerHTML = `Perte de revenu <b>(total sur l’arrêt)</b> ` + 
                      (modEnabled ? '<span class="badge">avec Moduvéo</span>' : '<span class="badge">sans Moduvéo</span>');
    }
  })();
  
  const selProf = CATALOG.profs.find(p=>p.id===profId);
  if ($('bubbleAvec')) $('bubbleAvec').textContent  = ruleText(selProf, scen, annualRef, isMicro);
  if ($('bubbleReste')) $('bubbleReste').textContent = ruleText(selProf, scen, annualRef, isMicro);
  if ($('bubbleSans')) $('bubbleSans').textContent  = ruleText(selProf, scen, annualRef, isMicro);
}

/* ---------- Frise + UX ---------- */
function renderPave(ctx, meta){
  // --- Garde-fous de vérification des IDs ---
  ['timeline2','barCreation','barCarence','barCpam','barCaisse','barFranchise','barMod',
   'tagEndRO','tagDebutMod','tlRuler','tlCursor','tlPanelBody','labelCaisse','tlSummary']
  .forEach(id=>{ if(!$(id)) console.warn('❌ id manquant :', id); });

  const profId     = (ctx && ctx.profId) ? ctx.profId : (I.profession?.value || '');
  const annualRef  = (ctx && typeof ctx.annualRef !== 'undefined') ? Number(ctx.annualRef) : Number((parseEuro($('salaireM')?.value)||0)*12);
  const isMicro    = !!(ctx && ctx.isMicro);
  const mod        = (ctx && ctx.mod) ? ctx.mod : (meta || {});
  const modEnabled = !!(mod && mod.enabled);
  const horizonM   = (ctx && typeof ctx.horizonM!=='undefined') ? Number(ctx.horizonM) : 60;
  const carence    = Number((meta && meta.carence) ?? 3);
  const maxDays    = Number((meta && meta.max) ?? 360);

  const prof = CATALOG.profs.find(x=>x.id===profId); if (!prof) return;
  const root=$('timeline2'), tagEndRO=$('tagEndRO'), tagDebutMod=$('tagDebutMod'), ruler=$('tlRuler'), cursor=$('tlCursor'), panelBody=$('tlPanelBody');
  const barCreation=$('barCreation'), barCarence=$('barCarence'), barCpam=$('barCpam'), barCaisse=$('barCaisse'), barFranch=$('barFranchise'), barMod=$('barMod');

  daltonien = $('daltoToggle') ? !!$('daltoToggle').checked : false; document.body.classList.toggle('daltonien', daltonien);

  const roCfg = prof.ro[$('scenario')?.value || 'maladie']; 
  const extra=Math.max(0, parseInt($('carenceCreation')?.value)||0);
  const affOK = !(I.affiliationCheck && I.affiliationCheck.checked);

  const caisseName = prof.label.match(/\((.*?)\)/)?.[1] || 'Caisse pro';
  const labelCaisse = $('labelCaisse'); if (labelCaisse) labelCaisse.textContent = `RO — ${caisseName}`;

  let cpamS=0, cpamE=0, caisseS=0, caisseE=0, cpamIJ=0, caisseIJ=0;
  if (roCfg.ro_kind==='pl_caisse'){
    cpamS=(roCfg.cpam?.carence_j ?? 3)+extra; cpamE=(roCfg.cpam?.max_j ?? 90)+extra; cpamIJ=ijFromFormula(roCfg.cpam?.f || 'cpam_1_730e', annualRef, isMicro);
    const caisse=roCfg.caisse||{};
    const isCaisseDefined = Object.keys(caisse).length > 0;
    if (isCaisseDefined) {
      caisseS = (caisse.start_j || 91) + extra;
      caisseE = (caisse.max_j || 1095) + extra;
      if(caisse.kind === 'fixed'){ caisseIJ = caisse.ij_j ?? 0; }
      else if(caisse.kind === 'piecewiseAge'){
        const age = parseInt(I.age?.value)||40;
        let ijBase = 0;
        let found = null;
        for(const b of caisse.bands){ if(annualRef <= b.rev_max){ found = b; break; } }
        if(found){
           ijBase = found.base !== undefined ? found.base : ijFromFormula(found.f, annualRef, isMicro);
           if(age >= 70){
             caisseIJ = ijBase * 0.5;
           } else if(age >= 62){
             // Cette logique n'est pas mensuelle, la bonne logique est dans simulate()
             caisseIJ = ijBase;
           } else {
             caisseIJ = ijBase;
           }
        }
      } else if(caisse.kind === 'piecewise'){
        let found = null;
        for(const b of caisse.bands){ if(annualRef <= b.rev_max){ found = b; break; } }
        caisseIJ = found ? (found.ij_j !== undefined ? found.ij_j : ijFromFormula(found.f, annualRef, isMicro)) : 0;
      }
    } else { caisseS = cpamE + 1; caisseE = cpamE; caisseIJ = 0; }
  } else {
    cpamS=(roCfg.carence_j||0)+extra; cpamE=maxDays; cpamIJ=(roCfg.ij_j ?? ijFromFormula(roCfg.f, annualRef, isMicro)) || 0;
  }

  const W = (root?.clientWidth || 600), pad = 14;
  const worldMax = Math.max(maxDays, ctx.mod?.max_j || 0, 365);
  const zoomMax  = (zoomMode === '180') ? 180 : worldMax;
  const px = d => Math.round(pad + (Math.min(d, zoomMax) / zoomMax) * (W - pad * 2));

  function setBar(el, dStart, dEnd, labelText){
    if (!el) return;
    let s = Math.max(0, Number(dStart) || 0);
    let e = Math.min(zoomMax, Number(dEnd)   || 0);
    if (e <= s && (s > 0 || e > 0)) e = s + 0.5; // 0.5j visible
    const L = Math.max(px(s), pad), R = Math.min(px(e), W - pad);
    const w = Math.max(0, R - L);
    el.style.left = L + 'px';
    el.style.width = w + 'px';
    el.style.opacity = (w > 0) ? '1' : '0';
    if (labelText) el.setAttribute('data-label', labelText);
  }

  setBar(barCreation, 0, extra, extra>0?`J0→J${extra}`:'');
  if(!affOK){ setBar(barCarence, 0, maxDays, `Affiliation < 12 mois`); }
  else { setBar(barCarence, extra, carence, carence>extra?`Carence RO J${extra+1}→J${carence}`:''); }

  if(affOK){
    setBar(barCpam, cpamS, cpamE, (cpamE>cpamS)?`J${cpamS+1}→J${cpamE} • ~${F2.format(cpamIJ)}/j`:''); 
    setBar(barCaisse, caisseS, caisseE, (caisseE>caisseS && caisseIJ>0)?`J${caisseS}→J${caisseE} • ~${F2.format(caisseIJ)}/j`:(caisseE>caisseS?`J${caisseS}→J${caisseE} • 0 €/j`:'')); 
  } else { setBar(barCpam,0,0,''); setBar(barCaisse,0,0,''); }

  const ijModFinal = ctx.mod?.auto ? Math.max(0, ctx.cibleJ - meta.ijro) : Math.max(0, ctx.mod?.custom||0);
  setBar(barFranch, 0, (modEnabled ? (ctx.mod?.franchise||0) : 0), (modEnabled && (ctx.mod?.franchise||0)>0) ? `Franchise ${ctx.mod.franchise} j` : '');
  setBar(barMod, (modEnabled ? (ctx.mod?.franchise||0) : 0), (modEnabled ? (ctx.mod?.max_j||0) : 0), modEnabled ? `J${ctx.mod.franchise}→J${ctx.mod.max_j} • ~${F2.format(ijModFinal)}/j` : '');

  if(tagEndRO){ tagEndRO.style.left=px(maxDays)+'px'; tagEndRO.textContent='Fin droits RO'; }
  if(tagDebutMod){ tagDebutMod.style.left=px(ctx.mod?.franchise||0)+'px'; tagDebutMod.textContent='Début Moduvéo'; }

  if(ruler){
    ruler.innerHTML='';
    const marks=[0,30,90,180,365,730,1095, zoomMax].filter((v,i,a)=> i===0 || (v>a[i-1] && v<=zoomMax));
    for(const d of marks){
      const tick=document.createElement('div');
      tick.className='tl-tick'+(([0,30,90,180,365,730,1095].includes(d))?' strong':''); 
      tick.style.left=px(d)+'px';
      const lab=document.createElement('strong'); lab.textContent='J'+d;
      tick.appendChild(lab); ruler.appendChild(tick);
    }
  }

  let tip=document.querySelector('.tl-tooltip'); if(!tip){ tip=document.createElement('div'); tip.className='tl-tooltip'; tip.style.display='none'; document.body.appendChild(tip); }
  function payerAtDay(D){
    if(!affOK) return {who:'Carence (affiliation)', ij:0};
    if(D<carence) return {who:'Carence RO', ij:0};
    if(roCfg.ro_kind==='pl_caisse'){
      if(D>=cpamS && D<=cpamE) return {who:'CPAM', ij:cpamIJ};
      if(D>=caisseS && D<=caisseE) return {who:'Caisse pro', ij:caisseIJ};
      return {who:'—', ij:0};
    } else {
      if(D>=cpamS && D<=cpamE) return {who:'RO', ij:cpamIJ};
      return {who:'—', ij:0};
    }
  }
  function modAtDay(D){ const on=(D>=(ctx.mod?.franchise||0) && D<=(ctx.mod?.max_j||0) && ( $('modToggle')?$('modToggle').checked:true )); return {on, ij:on?ijModFinal:0}; }
  function updatePanel(day){
    const pay=payerAtDay(day); const md=modAtDay(day);
    if($('tlPanelBody')){
      $('tlPanelBody').innerHTML=[
        `<div><b>Jour</b> : J${day}</div>`,
        `<div><b>RO</b> : ${pay.who}${pay.ij?` • ${F2.format(pay.ij)}/j`:''}</div>`,
        `<div><b>Moduvéo</b> : ${md.on ? `${F2.format(md.ij)}/j` : '—'}</div>`
      ].join('');
    }
  }

  if(root){
    root.onmousemove=(ev)=>{
      const r=root.getBoundingClientRect();
      const x=Math.max(pad, Math.min(ev.clientX - r.left, r.width - pad));
      if($('tlCursor')) $('tlCursor').style.left=x+'px';
      const d=Math.min(Math.max(Math.round(((x-pad)/(W - pad*2))*zoomMax),0), zoomMax);
      updatePanel(d);
      const modState=(d>=(ctx.mod?.franchise||0) && d<=(ctx.mod?.max_j||0) && ($('modToggle')?$('modToggle').checked:true)) ? 'Moduvéo actif' : 'Moduvéo inactif';
      tip.innerHTML=`<b>J${d}</b><br>${payerAtDay(d).who}<br>${modState}`;
      tip.style.left=(ev.clientX+14)+'px';
      tip.style.top =(ev.clientY+14)+'px';
      tip.style.display='block';
    };
    root.onmouseleave=()=>{ tip.style.display='none'; };
  }

  const cpamDur=Math.max(0, cpamE-cpamS), caisseDur=Math.max(0, caisseE-caisseS);
  const chips=[];
  if(cpamDur>0) chips.push(`CPAM ${cpamDur} j • ${F2.format(cpamIJ)}/j`);
  if(caisseE>caisseS) chips.push(`${caisseName} ${caisseDur} j • ${F2.format(caisseIJ)}/j`);
  chips.push(`Moduvéo ${Math.max(0,(ctx.mod?.max_j||1095)-(ctx.mod?.franchise||0))} j • ${F2.format(ijModFinal)}/j`);
  if($('tlSummary')) $('tlSummary').innerHTML=chips.map(c=>`<span class="chip">${c}</span>`).join('');
}

/* ---------- UI ---------- */
function initProf(){ if(!$('profession')) return; $('profession').innerHTML = CATALOG.profs.map(p=>`<option value="${p.id}">${p.label}</option>`).join(''); }
function bindUI(){
  const ids=['profession','scenario','age','salaireM','chargesM','carenceCreation','affiliation-check','microEntrepriseCheck','franchiseMod','plafondMod','ijModCustom','modAuto','horizon','cibleM','cibleSame','modToggle','daltoToggle','zoom180','zoomFull','arretJours'];
  ids.forEach(id=>{
    const el=$(id); if(!el) return;
    el.addEventListener('input', simulate);
    el.addEventListener('change', (e)=>{
      if(id==='zoom180' && e.target.checked){ zoomMode='180'; }
      else if(id==='zoomFull' && e.target.checked){ zoomMode='full'; }
      simulate();
    });
  });

  if ($('btnView')) $('btnView').addEventListener('click', ()=>{ viewByYear=!viewByYear; $('btnView').textContent=viewByYear?'🗓 Année':'🗓 Mois'; simulate(); });

  const toggleMicroUI = () => {
    const prof = I.profession?.value || '';
    // Micro éligible : SSI + toutes les professions libérales (lib_*) sauf liste noire
    const notEligibleLib = ['lib_cprn','cnbf_avocat']; // Notaire, Avocat
    const eligible = (prof.startsWith('ssi_') || prof.startsWith('lib_')) && !notEligibleLib.includes(prof);

    if (I.microEntrepriseBlock) I.microEntrepriseBlock.style.display = 'block';
    if (I.microEntrepriseCheck){
      I.microEntrepriseCheck.disabled = !eligible;
      if (!eligible) I.microEntrepriseCheck.checked = false;
    }
    const on = eligible && I.microEntrepriseCheck && I.microEntrepriseCheck.checked;
    if (I.microAct) I.microAct.disabled = !on;
    if (I.microCA)  I.microCA.disabled  = !on;
    if (!on && I.microSummary) I.microSummary.textContent = eligible ? '' : 'Profil non éligible au micro-entreprise';

    // bouton d'aide "?" visible uniquement si éligible
    const hb = document.getElementById('microHelp');
    if (hb) hb.style.display = eligible ? 'inline-flex' : 'none';
  };

  // initial toggle
  toggleMicroUI();

  ['microEntrepriseCheck','microAct','microCA','profession'].forEach(id=>{
    const el=$(id); if(!el) return;
    el.addEventListener('change', ()=>{ toggleMicroUI(); simulate(); });
    el.addEventListener('input',  ()=>{ simulate(); });
  });

  const updateCible=()=>{ if ($('cibleSame')?.checked){ if($('cibleM')) $('cibleM').value=$('salaireM')?.value||''; if($('cibleM')) $('cibleM').disabled=true; } else { if($('cibleM')) $('cibleM').disabled=false; } simulate(); };
  if($('cibleSame')) $('cibleSame').addEventListener('change', updateCible);
  if($('salaireM')) $('salaireM').addEventListener('input', updateCible);

  // --- Help tooltip (micro-entreprise)
  const helpBtn = $('microHelp');
  const helpBubbleId = 'microHelpBubble';
  if (helpBtn) {
    helpBtn.addEventListener('click', (e) => {
      const open = !helpBtn.classList.contains('open');
      helpBtn.classList.toggle('open', open);
      helpBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    // close when click outside
    document.addEventListener('click', (e) => {
      if (!helpBtn.classList.contains('open')) return;
      const b = document.getElementById(helpBubbleId);
      if (!b) return;
      if (!helpBtn.contains(e.target) && !b.contains(e.target)) {
        helpBtn.classList.remove('open');
        helpBtn.setAttribute('aria-expanded','false');
      }
    });
    // Esc to close
    helpBtn.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        helpBtn.classList.remove('open');
        helpBtn.setAttribute('aria-expanded','false');
        helpBtn.blur();
      }
    });
  }

  ['Avec', 'Reste', 'Sans'].forEach(s => {
    const btn = document.getElementById('help' + s);
    const bubble = document.getElementById('bubble' + s);
    if(btn && bubble){
      btn.addEventListener('click', ()=>{
        const isOpen = btn.getAttribute('aria-expanded') === 'true';
        document.querySelectorAll('.help-bubble').forEach(b => b.style.display = 'none');
        document.querySelectorAll('.help').forEach(b => b.setAttribute('aria-expanded', 'false'));
        if (!isOpen) {
          btn.setAttribute('aria-expanded', 'true');
          bubble.style.display = 'block';
        }
      });
      // Click outside to close
      document.addEventListener('click', (e) => {
          if (!btn.contains(e.target) && !bubble.contains(e.target)) {
              btn.setAttribute('aria-expanded', 'false');
              bubble.style.display = 'none';
          }
      });
    }
  });
}

/* ---------- Bootstrap ---------- */
(function init(){
  initProf();
  const s=loadState();
  if($('profession')) $('profession').value = s.profession;
  if($('scenario'))   $('scenario').value   = s.scenario;
  if($('age'))        $('age').value        = s.age;
  if($('salaireM'))   $('salaireM').value   = s.salaireM;
  if($('chargesM'))   $('chargesM').value   = s.chargesM;

  if($('cibleM'))     $('cibleM').value     = s.cibleM || s.salaireM;
  if($('cibleSame'))  $('cibleSame').checked = s.cibleSame;

  if($('carenceCreation')) $('carenceCreation').value = s.carenceCreation;

  if ($('affiliation-check'))    $('affiliation-check').checked = s.affiliationCheck;
  if ($('microEntrepriseCheck')) $('microEntrepriseCheck').checked = s.microEntrepriseCheck;
  if ($('microAct')) $('microAct').value = s.microAct || 'bic_vente';
  if ($('microCA'))  $('microCA').value  = s.microCA || '';

  if($('franchiseMod')) $('franchiseMod').value = s.franchiseMod;
  if($('plafondMod'))   $('plafondMod').value   = s.plafondMod;
  if($('ijModCustom'))  $('ijModCustom').value  = s.ijModCustom;
  if($('modAuto'))      $('modAuto').checked    = s.modAuto;

  if($('horizon')) $('horizon').value = s.horizon;
  if($('arretJours')) $('arretJours').value = s.arretJours || 30;

  bindUI();
  
  // Relancer simulate() quand on change ON/OFF et le nombre de jours
  $('modToggle')?.addEventListener('change', simulate);
  $('arretJours')?.addEventListener('input', simulate);
  $('age')?.addEventListener('input', simulate);

  if ($('cibleSame')?.checked && $('cibleM')) { $('cibleM').disabled = true; }
  
  function applyExample({scenario='maladie', franchise=15, horizon=60, jours=30, note='Scénario type'}){
    if($('scenario')) $('scenario').value = scenario;
    if($('franchiseMod')) $('franchiseMod').value = String(franchise);
    if($('horizon')) $('horizon').value = String(horizon);
    if($('arretJours')) $('arretJours').value = String(jours);
    simulate();
  }
  
  const ex = [
    ['btnMaladie30j',       ()=>applyExample({scenario:'maladie', jours:30, note:'Maladie 30 j'})],
    ['btnAccident45j',      ()=>applyExample({scenario:'atmp', jours:45, note:'Accident 45 j'})],
    ['btnHospitalisation7j',()=>applyExample({scenario:'maladie', jours:7, franchise:7, note:'Hospitalisation 7 j'})],
    ['btnBurnout90j',       ()=>applyExample({scenario:'maladie', jours:90, note:'Burnout 90 j'})],
    ['btnBlessureSport15j', ()=>applyExample({scenario:'autre', jours:15, note:'Blessure (sport) 15 j'})],
    ['btnArretLong',        ()=>applyExample({scenario:'maladie', jours:365, horizon:12, note:'Arrêt long 1 an'})],
  ];
  ex.forEach(([id,fn])=>{ const b=$(id); if(b) b.addEventListener('click', fn); });

  simulate();
  (function(){ const e=new Event('change'); if ($('profession')) $('profession').dispatchEvent(e); if ($('microEntrepriseCheck')) $('microEntrepriseCheck').dispatchEvent(e); })();
  window.addEventListener('resize', simulate);
})();
