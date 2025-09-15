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
        autre: { ro_kind:'pl_caisse', cpam:{carence_j:3, max_j:90, f:'cpam_1_730e'}, caisse:{} } 
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
        caisse:{start_j:91, kind:"piecewise",
          bands:[ {rev_max:47100, ij_j:64.52}, {rev_max:141300, f:"cpam_1_730e"}, {rev_max:Infinity, ij_j:193.56} ],
          max_j:1095 } },
      atmp:{ ro_kind:"pl_caisse", cpam:{carence_j:3, max_j:90, f:"cpam_1_730e"},
        caisse:{start_j:91, kind:"piecewise",
          bands:[ {rev_max:47100, ij_j:64.52}, {rev_max:141300, f:"cpam_1_730e"}, {rev_max:Infinity, ij_j:193.56} ],
          max_j:1095 } },
      autre:{ ro_kind:"pl_caisse", cpam:{carence_j:3, max_j:90, f:"cpam_1_730e"},
        caisse:{start_j:91, kind:"piecewise",
          bands:[ {rev_max:47100, ij_j:64.52}, {rev_max:141300, f:"cpam_1_730e"}, {rev_max:Infinity, ij_j:193.56} ],
          max_j:1095 } }
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
  profession:$('profession'), scenario:$('scenario'),
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
const DEFAULT_STATE={ profession:'ssi_artisan', scenario:'maladie', salaireM:'3000', chargesM:'2000', cibleM:'', cibleSame:true, carenceCreation:'0', affiliationCheck:false, microEntrepriseCheck:false, microAct:'bic_vente', microCA:'', franchiseMod:'15', plafondMod:'', ijModCustom:'', modAuto:true, horizon:'60' };
function loadState(){ try{ const raw=localStorage.getItem(STORAGE_KEY); if(!raw) return DEFAULT_STATE; return {...DEFAULT_STATE, ...JSON.parse(raw)}; }catch(e){ return DEFAULT_STATE; } }
function saveState(){ try{ const s={ profession:I.profession?.value, scenario:I.scenario?.value, salaireM:I.salaireM?.value, chargesM:I.chargesM?.value, cibleM:I.cibleM?.value, cibleSame:!!I.cibleSame?.checked, carenceCreation:I.carenceCreation?.value, affiliationCheck:!!I.affiliationCheck?.checked, microEntrepriseCheck:!!I.microEntrepriseCheck?.checked, microAct:I.microAct?.value, microCA:I.microCA?.value, franchiseMod:I.franchiseMod?.value, plafondMod:I.plafondMod?.value, ijModCustom:I.ijModCustom?.value, modAuto:!!I.modAuto?.checked, horizon:I.horizon?.value }; localStorage.setItem(STORAGE_KEY, JSON.stringify(s)); }catch(e){} }

/* ---------- Calculs RO / Mod ---------- */
function ijFromFormula(name, annualRef, isMicro=false){ const f=CATALOG.formulas[name]; if(!f) return 0; if (name==='ssi_1_730e' && isMicro && annualRef<4710) return 0; let ij=(annualRef||0)/730; let min=f.min_j; if(name==='ssi_1_730e' && isMicro){ min=0; } return clamp(ij, min, f.max_j); }
function computeROMonth(m, prof, scen, annualRef, carenceCreation, isAffiliationOK, isMicro){
  const p=CATALOG.profs.find(x=>x.id===prof); const cfg=p?.ro?.[scen]; if(!cfg){ return {roM:0,roIJj:0,carence:0,max:0,warn:true,cpamM:0,caisseProM:0}; }
  
  // Correction 1: Gérer le cas d'affiliation non OK
  if (!isAffiliationOK){ 
    const fallbackMax = (cfg.max_j || 0) + carenceCreation || 90;
    return { roM:0, roIJj:0, carence:(cfg.carence_j||0)+carenceCreation, max:fallbackMax, warn:false, cpamM:0, caisseProM:0 };
  }

  annualRef = (annualRef||0); 
  const extra = Math.max(0, parseInt(I.carenceCreation.value)||0); 
  const roConfig = p.ro[I.scenario.value]; 
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
      } else if(caisse.kind === 'piecewise'){
        let found = null;
        for(const b of caisse.bands){
          if(annualRef <= b.rev_max){
            found = b;
            break;
          }
        }
        caisseIJ = found ? (found.ij_j !== undefined ? found.ij_j : ijFromFormula(found.f, annualRef, isMicro)) : 0;
      }
    } else {
        caisseS = cpamMax;
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
  const ctx2=$('chart').getContext('2d');
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
  if (!I.salaireM?.value || !I.chargesM?.value){ I.warn.textContent="⚠️ Veuillez renseigner le salaire net et les charges fixes."; I.warn.classList.add('show'); return; }
  I.warn.classList.remove('show');
const profId=I.profession.value, scen=I.scenario.value;
  const salaireM=parseEuro(I.salaireM.value)||0, chargesM=parseEuro(I.chargesM.value)||0;
  const cibleM = I.cibleSame.checked ? salaireM : (parseEuro(I.cibleM.value)||0);
  const cibleJ=cibleM/30;
  const carenceCreation=Math.max(0, parseInt(I.carenceCreation.value)||0);
  const isAffiliationOK = !(I.affiliationCheck && I.affiliationCheck.checked);
  const isMicro = I.microEntrepriseCheck && I.microEntrepriseCheck.checked;
  const franchiseMod=Math.max(0, parseInt(I.franchiseMod.value)||0);
  const plaf=parseEuro(I.plafondMod.value)||0;
  const modAuto=!!I.modAuto.checked;
  const ijModCustom=parseEuro(I.ijModCustom.value)||0;
  const horizonM=Math.max(1, parseInt(I.horizon.value)||60);
  const modEnabled = $('modToggle') ? !!$('modToggle').checked : true;

  
  // Annual reference income
  let annualRef = salaireM * 12;
  let microNote = '';
  const isPLmicroEligible = (profId === 'lib_nr');
  if (isMicro && (profId.startsWith('ssi_') || isPLmicroEligible)){
    const ca = parseEuro(I.microCA?.value)||0;
    const coef = (I.microAct?.value==='bic_vente') ? 0.29 : (I.microAct?.value==='bic_services') ? 0.50 : 0.66;
    const retenu = ca * coef;
    annualRef = retenu;
    microNote = `CA ${F0.format(ca)} → revenu retenu ${F0.format(retenu)}/an`;
    if (I.microSummary) I.microSummary.textContent = microNote;
  } else {
    if (I.microSummary) I.microSummary.textContent = '';
  }

  const ctx={ profId, scen, salaireM, chargesM, cibleM, cibleJ, carenceCreation, isAffiliationOK, isMicro,
              mod:{ franchise:franchiseMod, plafond:plaf, max_j:1095, auto:modAuto, custom:ijModCustom, enabled:modEnabled },
              horizonM, annualRef };
  // Micro threshold warning (runs after annualRef is computed)
  if (isMicro && profId.startsWith('ssi_') && annualRef < 4710){
    I.warn.textContent = "⚠️ Micro-entreprise : revenu retenu < 4 710 € (10 % PASS 2025) ⇒ IJ SSI = 0 €.";
    I.warn.classList.add('show');
  }


  const M=horizonM; const ro=[],mod=[],sans=[],avec=[],cpam=[],caissePro=[];
  let anyWarn=false,carence=0,ijro=0,max=0;

  const selectedProf=CATALOG.profs.find(p=>p.id===profId);
  if(!selectedProf || !selectedProf.ro || !selectedProf.ro[scen]) return;

  for(let m=0;m<M;m++){
    const f = (function flowMonth(m){
      const r=computeROMonth(m, profId, scen, ctx.annualRef, carenceCreation, isAffiliationOK, isMicro);
      let ijModj=modAuto ? Math.max(0, (cibleJ - r.roIJj)) : Math.max(0, ijModCustom);
      if(plaf>0) ijModj=Math.min(ijModj, plaf);
      if(!modEnabled) ijModj=0;
      const dMod=coveredDays(franchiseMod, m, 1095);
      const modM=dMod*ijModj;
      return { roM:r.roM, roIJj:r.roIJj, modM, sans:r.roM, avec:r.roM+modM, carence:r.carence, max:r.max, warn:r.warn, cpamM:r.cpamM, caisseProM:r.caisseProM };
    })(m);
    ro.push(f.roM); mod.push(f.modM); sans.push(f.sans); avec.push(f.avec); cpam.push(f.cpamM); caissePro.push(f.caisseProM);
    if(m===0){carence=f.carence; ijro=f.roIJj; max=f.max;}
    if(f.warn) anyWarn=true;
  }

  const charges = new Array(M).fill(chargesM), cible = new Array(M).fill(cibleM);
  const A1=Math.min(12,M), mean=a=>a.slice(0,A1).reduce((x,t)=>x+t,0)/A1, kAvec=mean(avec), kSans=mean(sans), kReste=kAvec-chargesM, kManqueSans=Math.max(0, chargesM-kSans);
  $('vA1Avec').textContent=F0.format(kAvec)+'/mois'; $('vA1Reste').textContent=F0.format(kReste)+'/mois'; $('vA1Sans').textContent=F0.format(kManqueSans)+'/mois';
  $('kA1Avec').className='kpi '+(kAvec>=chargesM?'ok':'bad'); $('kA1Reste').className='kpi '+(kReste>=0?'ok':'bad'); $('kA1Sans').className='kpi '+(kManqueSans===0?'ok':'bad');

  let carenceInfo=`Carence RO : ${carence} j`; if(carenceCreation>0) carenceInfo+=` (incl. création ${carenceCreation} j)`;
  $('bCarence').textContent=carenceInfo; $('bIJRO').textContent=`IJ RO : ${F2.format(ijro)}/j`; $('bMax').textContent=`Durée max RO : ${max} j`; $('bFranchise').textContent=`Franchise Moduvéo : ${franchiseMod} j`; $('bCible').textContent=`Salaire cible : ${F0.format(cibleM)}/mois`;
  I.warn.classList.toggle('show', !!anyWarn);
  $('modHint').textContent = modAuto ? `Suggestion automatique ≈ ${F2.format(Math.max(0, cibleJ - ijro))}/j` : `Montant manuel Moduvéo: ${F2.format(ijModCustom)}/j`;
  if(I.microEntrepriseBlock) I.microEntrepriseBlock.style.display = (profId.includes('ssi')) ? 'flex' : 'none';

  drawChart({months:M, cpam, caissePro, mod, charges, cible, sans, avec});

  const roCfg=selectedProf.ro[scen];
  const caisseName = selectedProf.label.match(/\((.*?)\)/)?.[1] || 'Caisse pro';
  let sous=roCfg?.cpam ? `CPAM J${(roCfg.cpam.carence_j||0)+1}–J${roCfg.cpam.max_j}` : 'Pas de prise en charge CPAM';
  if (roCfg?.caisse?.kind){
    sous += roCfg.caisse.kind==='fixed' ? ` • ${caisseName} J${roCfg.caisse.start_j || 91}+` : ` • ${caisseName} (barème) J${roCfg.caisse.start_j || 91}+`;
  } else if(roCfg?.ro_kind==='pl_caisse' && !roCfg?.caisse){
    sous+=' • Pas de couverture après J90';
  }
  $('paveMetier').textContent=`${selectedProf.label} — scénario ${scen} • ${sous}`;

  ctx.profId = I.profession.value || '';
  ctx.annualRef = annualRef;
  ctx.isMicro = !!(I.microEntrepriseCheck && I.microEntrepriseCheck.checked);
  ctx.mod = mod;
  ctx.horizonM = horizonM;
  renderPave(ctx, {carence, max, ijro});
  saveState();
}

/* ---------- Frise + UX ---------- */
function renderPave(ctx, meta){
  // normalized context
  const profId     = (ctx && ctx.profId) ? ctx.profId : (I.profession?.value || '');
  const annualRef  = (ctx && typeof ctx.annualRef !== 'undefined') ? Number(ctx.annualRef) : Number((parseEuro($('salaireM').value)||0)*12);
  const isMicro    = !!(ctx && ctx.isMicro);
  const mod        = (ctx && ctx.mod) ? ctx.mod : (meta || {});
  const modEnabled = !!(mod && mod.enabled);
  const horizonM   = (ctx && typeof ctx.horizonM!=='undefined') ? Number(ctx.horizonM) : 60;
  const isSSI      = profId.startsWith('ssi_');
  const isPL       = profId.startsWith('pl_') || profId.startsWith('lib_');
  const carence    = Number((meta && meta.carence) ?? 3);
  const maxDays    = Number((meta && meta.max) ?? 360);
  const ij         = Math.max(0, Math.round((Number(annualRef)/730)*100)/100);
  const segments   = [];
  const badges     = [];

const prof = CATALOG.profs.find(x=>x.id===ctx.profId); if (!prof) return;
  const root=$('timeline2'), tagEndRO=$('tagEndRO'), tagDebutMod=$('tagDebutMod'), ruler=$('tlRuler'), cursor=$('tlCursor'), panelBody=$('tlPanelBody');
  const barCreation=$('barCreation'), barCarence=$('barCarence'), barCpam=$('barCpam'), barCaisse=$('barCaisse'), barFranch=$('barFranchise'), barMod=$('barMod');

  daltonien = $('daltoToggle') ? !!$('daltoToggle').checked : false; document.body.classList.toggle('daltonien', daltonien);

  const roCfg = prof.ro[$('scenario').value]; const extra=Math.max(0, parseInt($('carenceCreation').value)||0);
  const affOK = !(I.affiliationCheck && I.affiliationCheck.checked);

  // Met à jour le libellé de la voie caisse pro avec le vrai nom
  const caisseName = prof.label.match(/\((.*?)\)/)?.[1] || 'Caisse pro';
  const labelCaisse = $('labelCaisse'); if (labelCaisse) labelCaisse.textContent = `RO — ${caisseName}`;

  let cpamS=0, cpamE=0, caisseS=0, caisseE=0, cpamIJ=0, caisseIJ=0;
  if (roCfg.ro_kind==='pl_caisse'){
    cpamS=(roCfg.cpam?.carence_j ?? 3)+extra; cpamE=(roCfg.cpam?.max_j ?? 90)+extra; cpamIJ=ijFromFormula(roCfg.cpam?.f || 'cpam_1_730e', annualRef, I.microEntrepriseCheck?.checked);
    
    const caisse=roCfg.caisse||{};
    const isCaisseDefined = Object.keys(caisse).length > 0;
    
    if (isCaisseDefined) {
      caisseS = (caisse.start_j || 91) + extra;
      caisseE = (caisse.max_j || 1095) + extra;
      if(caisse.kind === 'fixed'){
        caisseIJ = caisse.ij_j ?? 0;
      } else if(caisse.kind === 'piecewise'){
        let found = null;
        for(const b of caisse.bands){
          if(annualRef <= b.rev_max){
            found = b;
            break;
          }
        }
        caisseIJ = found ? (found.ij_j !== undefined ? found.ij_j : ijFromFormula(found.f, annualRef, I.microEntrepriseCheck?.checked)) : 0;
      }
    } else {
        caisseS = cpamE + 1;
        caisseE = cpamE;
        caisseIJ = 0;
    }
  } else {
    cpamS=(roCfg.carence_j||0)+extra; cpamE=meta.max; cpamIJ=(roCfg.ij_j ?? ijFromFormula(roCfg.f, annualRef, I.microEntrepriseCheck?.checked)) || 0;
  }


  const W=root.clientWidth||600, pad=14; 
  // Correction 2: Empêcher meta.max d'être 0 si la profession est 'lib_nr'
  const maxToUse = (profId === 'lib_nr' && meta.max === 0) ? 90 : meta.max;
  const worldMax = Math.max(maxToUse, ctx.mod.max_j, 365); 
  const zoomMax = (zoomMode === '180') ? 180 : worldMax;
  const px=d=>Math.round(pad + (Math.min(d,zoomMax)/zoomMax)*(W - pad*2)); const invPx=x=>Math.round(((x-pad)/(W - pad*2))*zoomMax);

  function setBar(el, dStart, dEnd, labelText){
    if(!el) return;
    let s=Math.max(0, dStart), e=Math.min(zoomMax, dEnd);
    // Correction 3: Gérer le cas où start = end pour les barres de 1px
    if (s === e && s > 0) e = s + 0.5;
    const L=Math.max(px(s),pad), R=Math.min(px(e),W-pad);
    const w=Math.max(0, R-L);
    el.style.left=L+'px';
    el.style.width=w+'px';
    el.style.opacity=(w>0)?'1':'0';
    if(labelText) el.setAttribute('data-label', labelText);
  }

  // --- Ajout des garde-fous de débogage ---
  ['timeline2','barCreation','barCarence','barCpam','barCaisse','barFranchise','barMod',
  'tagEndRO','tagDebutMod','tlRuler','tlCursor','tlPanelBody','labelCaisse','tlSummary']
  .forEach(id=>{ if(!$(id)) console.warn('❌ id manquant :', id); });

  console.log('[frise]', { cpamS, cpamE, caisseS, caisseE, cpamIJ, caisseIJ, carence, extra, affOK, zoomMode, zoomMax });
  // --- Fin des garde-fous ---

  setBar(barCreation, 0, extra, extra>0?`J0→J${extra}`:'');
  if(!affOK){ setBar(barCarence, 0, meta.max, `Affiliation < 12 mois`); }
  else { setBar(barCarence, extra, meta.carence, meta.carence>extra?`Carence RO J${extra+1}→J${meta.carence}`:''); }

  if(affOK){
    setBar(barCpam, cpamS, cpamE, (cpamE>cpamS)?`J${cpamS+1}→J${cpamE} • ~${F2.format(cpamIJ)}/j`:'');
    setBar(barCaisse, caisseS, caisseE, (caisseE>caisseS && caisseIJ>0)?`J${caisseS}→J${caisseE} • ~${F2.format(caisseIJ)}/j`:(caisseE>caisseS?`J${caisseS}→J${caisseE} • 0 €/j`:'')); 
  } else { setBar(barCpam,0,0,''); setBar(barCaisse,0,0,''); }

  const ijModEst = ctx.mod.auto ? Math.max(0, ctx.cibleJ - meta.ijro) : Math.max(0, ctx.mod.custom||0);
  const ijModFinal = ctx.mod.plafond>0 ? Math.min(ijModEst, ctx.mod.plafond) : ijModEst;
  setBar(barFranch, 0, modEnabled ? ctx.mod.franchise : 0, (modEnabled && ctx.mod.franchise>0) ? `Franchise ${ctx.mod.franchise} j` : '');
  setBar(barMod, modEnabled ? ctx.mod.franchise : 0, modEnabled ? ctx.mod.max_j : 0, modEnabled ? `J${ctx.mod.franchise}→J${ctx.mod.max_j} • ~${F2.format(ijModFinal)}/j` : '');

  tagEndRO.style.left=px(meta.max)+'px'; tagEndRO.textContent='Fin droits RO';
  tagDebutMod.style.left=px(ctx.mod.franchise)+'px'; tagDebutMod.textContent='Début Moduvéo';

  ruler.innerHTML=''; const marks=[0,30,90,180,365,730,1095, zoomMax].filter((v,i,a)=> i===0 || (v>a[i-1] && v<=zoomMax));
  for(const d of marks){ const tick=document.createElement('div'); tick.className='tl-tick'+(([0,30,90,180,365,730,1095].includes(d))?' strong':''); tick.style.left=px(d)+'px'; const lab=document.createElement('strong'); lab.textContent='J'+d; tick.appendChild(lab); ruler.appendChild(tick); }

  let tip=document.querySelector('.tl-tooltip'); if(!tip){ tip=document.createElement('div'); tip.className='tl-tooltip'; tip.style.display='none'; document.body.appendChild(tip); }
  function payerAtDay(D){
    if(!affOK) return {who:'Carence (affiliation)', ij:0};
    if(D<meta.carence) return {who:'Carence RO', ij:0};
    if(roCfg.ro_kind==='pl_caisse'){ if(D>=cpamS && D<=cpamE) return {who:'CPAM', ij:cpamIJ}; if(D>=caisseS && D<=caisseE) return {who:'Caisse pro', ij:caisseIJ}; return {who:'—', ij:0}; }
    else { if(D>=cpamS && D<=cpamE) return {who:'RO', ij:cpamIJ}; return {who:'—', ij:0}; }
  }
  function modAtDay(D){ const on=(D>=ctx.mod.franchise && D<=ctx.mod.max_j && ( $('modToggle')?$('modToggle').checked:true )); return {on, ij:on?ijModFinal:0}; }
  function updatePanel(day){
    const pay=payerAtDay(day); const mod=modAtDay(day);
    panelBody.innerHTML=[ `<div><b>Jour</b> : J${day}</div>`, `<div><b>RO</b> : ${pay.who}${pay.ij?` • ${F2.format(pay.ij)}/j`:''}</div>`, `<div><b>Moduvéo</b> : ${mod.on ? `${F2.format(mod.ij)}/j` : '—'}</div>` ].join('');
  }

  root.onmousemove=(ev)=>{
    const r=root.getBoundingClientRect();
    const x=Math.max(pad, Math.min(ev.clientX - r.left, r.width - pad));
    cursor.style.left=x+'px';
    const d=Math.min(Math.max(Math.round(((x-pad)/(W - pad*2))*zoomMax),0), zoomMax);
    updatePanel(d);
    const modState=(d>=ctx.mod.franchise && d<=ctx.mod.max_j && ($('modToggle')?$('modToggle').checked:true)) ? 'Moduvéo actif' : 'Moduvéo inactif';
    tip.innerHTML=`<b>J${d}</b><br>${payerAtDay(d).who}<br>${modState}`;
    tip.style.left=(ev.clientX+14)+'px';
    tip.style.top =(ev.clientY+14)+'px';
    tip.style.display='block';
  };
  root.onmouseleave=()=>{ tip.style.display='none'; };

  const sum=$('tlSummary'); const cpamDur=Math.max(0, cpamE-cpamS), caisseDur=Math.max(0, caisseE-caisseS), modDur=Math.max(0, ctx.mod.max_j-ctx.mod.franchise);
  const chips=[]; if(cpamDur>0) chips.push(`CPAM ${cpamDur} j • ${F2.format(cpamIJ)}/j`); if(caisseE>caisseS) chips.push(`${caisseName} ${caisseDur} j • ${F2.format(caisseIJ)}/j`); chips.push(`Moduvéo ${modDur} j • ${F2.format(ijModFinal)}/j`);
  sum.innerHTML=chips.map(c=>`<span class="chip">${c}</span>`).join('');
}

/* ---------- UI ---------- */
function initProf(){ $('profession').innerHTML = CATALOG.profs.map(p=>`<option value="${p.id}">${p.label}</option>`).join(''); }
function bindUI(){
  const ids=['profession','scenario','salaireM','chargesM','carenceCreation','affiliation-check','microEntrepriseCheck','franchiseMod','plafondMod','ijModCustom','modAuto','horizon','cibleM','cibleSame','modToggle','daltoToggle','zoom180','zoomFull'];
  ids.forEach(id=>{
    const el=$(id); if(!el) return;
    el.addEventListener('input', simulate);
    el.addEventListener('change', (e)=>{
      if(id==='zoom180' && e.target.checked){ zoomMode='180'; 
  I.profession.addEventListener('change', ()=>{ toggleMicroUI(); simulate(); });
}
      else if(id==='zoomFull' && e.target.checked){ zoomMode='full'; }
      simulate();
    });
  });

  if ($('btnView')) $('btnView').addEventListener('click', ()=>{ viewByYear=!viewByYear; $('btnView').textContent=viewByYear?'🗓 Année':'🗓 Mois'; simulate(); });


  const toggleMicroUI = () => {
  const prof = I.profession.value || '';
  const eligible = prof.startsWith('ssi_') || (prof === 'lib_nr');
  if (I.microEntrepriseBlock) I.microEntrepriseBlock.style.display = 'block';
  if (I.microEntrepriseCheck){
    I.microEntrepriseCheck.disabled = !eligible;
    if (!eligible) I.microEntrepriseCheck.checked = false;
  }
  const on = eligible && I.microEntrepriseCheck && I.microEntrepriseCheck.checked;
  if (I.microAct) I.microAct.disabled = !on;
  if (I.microCA)  I.microCA.disabled  = !on;
  if (!on && I.microSummary) I.microSummary.textContent = eligible ? '' : 'Profil non éligible au micro-entreprise';
};

  // initial toggle
  toggleMicroUI();

  ['microEntrepriseCheck','microAct','microCA','profession'].forEach(id=>{
    const el=$(id); if(!el) return;
    el.addEventListener('change', ()=>{ toggleMicroUI(); simulate(); });
    el.addEventListener('input',  ()=>{ simulate(); });
  });


  const updateCible=()=>{ if ($('cibleSame').checked){ $('cibleM').value=$('salaireM').value; $('cibleM').disabled=true; } else { $('cibleM').disabled=false; } simulate(); };
  $('cibleSame').addEventListener('change', updateCible);
  $('salaireM').addEventListener('input', updateCible);
}

/* ---------- Bootstrap ---------- */
(function init(){
  initProf();
  const s=loadState();
  $('profession').value = s.profession;
  $('scenario').value   = s.scenario;
  $('salaireM').value   = s.salaireM;
  $('chargesM').value   = s.chargesM;

  $('cibleM').value     = s.cibleM || s.salaireM;
  $('cibleSame').checked = s.cibleSame;

  $('carenceCreation').value = s.carenceCreation;

  if ($('affiliation-check'))    $('affiliation-check').checked = s.affiliationCheck;
  if ($('microEntrepriseCheck')) $('microEntrepriseCheck').checked = s.microEntrepriseCheck;
  if ($('microAct')) $('microAct').value = s.microAct || 'bic_vente';
  if ($('microCA'))  $('microCA').value  = s.microCA || '';

  $('franchiseMod').value = s.franchiseMod;
  $('plafondMod').value   = s.plafondMod;
  $('ijModCustom').value  = s.ijModCustom;
  $('modAuto').checked    = s.modAuto;

  $('horizon').value = s.horizon;

  bindUI();

  // État initial des champs liés à "Utiliser le salaire net"
  if ($('cibleSame').checked) { $('cibleM').disabled = true; }

  // Premier rendu
  simulate();
  // Ajuste l'UI micro après premier rendu
  (function(){ const e=new Event('change'); if ($('profession')) $('profession').dispatchEvent(e); if ($('microEntrepriseCheck')) $('microEntrepriseCheck').dispatchEvent(e); })();

  // Responsive
  window.addEventListener('resize', simulate);
})();
