/* ASCENDA 360 — scripts */

// Menu mobile
document.addEventListener('DOMContentLoaded', function(){
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.nav');
  if(toggle && nav){
    toggle.addEventListener('click', function(){ nav.classList.toggle('open'); });
  }
});

// ---------- Acervo (só roda na página do acervo) ----------
var EIXOS = {
  todos:'Todos os temas',
  lideranca:'Liderança',
  julgamento:'Julgamento e vieses',
  ia_trabalho:'IA e futuro do trabalho',
  carreira:'Carreira',
  rh:'RH estratégico',
  cultura:'Cultura e saúde mental'
};

function initAcervo(){
  var grid = document.getElementById('edicoes-grid');
  if(!grid) return;
  var filtrosBox = document.getElementById('filtros');
  var countBox = document.getElementById('acervo-count');
  var current = 'todos';
  var edicoes = [];

  fetch('data/edicoes.json')
    .then(function(r){ return r.json(); })
    .then(function(data){
      edicoes = data.slice().reverse(); // mais recentes primeiro
      buildFiltros();
      render();
    })
    .catch(function(){ grid.innerHTML = '<p style="color:#6B7689">Não foi possível carregar o acervo.</p>'; });

  function buildFiltros(){
    var html = '';
    Object.keys(EIXOS).forEach(function(k){
      html += '<button class="filtro'+(k==='todos'?' active':'')+'" data-eixo="'+k+'">'+EIXOS[k]+'</button>';
    });
    filtrosBox.innerHTML = html;
    filtrosBox.querySelectorAll('.filtro').forEach(function(b){
      b.addEventListener('click', function(){
        filtrosBox.querySelectorAll('.filtro').forEach(function(x){x.classList.remove('active');});
        b.classList.add('active');
        current = b.getAttribute('data-eixo');
        render();
      });
    });
  }

  function render(){
    var list = current==='todos' ? edicoes : edicoes.filter(function(e){return e.eixo===current;});
    countBox.textContent = list.length + (list.length===1?' edição':' edições');
    if(!list.length){ grid.innerHTML='<p style="color:#6B7689">Nenhuma edição neste tema ainda.</p>'; return; }
    grid.innerHTML = list.map(function(e){
      var href = e.link && e.link.length ? e.link : '#';
      var target = e.link && e.link.length ? ' target="_blank" rel="noopener"' : '';
      var numHtml = e.num ? '<span class="edicao-num">'+e.num+'</span>' : '';
      return '<a class="edicao-card" href="'+href+'"'+target+'>'+
        '<span class="arrow" aria-hidden="true">↗</span>'+
        '<div class="edicao-meta">'+numHtml+'<span class="edicao-eixo">'+EIXOS[e.eixo]+'</span></div>'+
        '<h3>'+e.titulo+'</h3>'+
        '<p>'+e.resumo+'</p>'+
      '</a>';
    }).join('');
  }
}
document.addEventListener('DOMContentLoaded', initAcervo);
