var vu = new Vue({
  el: '#app',
  data: {
    actShow: false,
    plHealth: 100,
    cpHealth: 100,
    history: []

  },
  methods: {
    startGame: function() {
      this.actShow = true;
      this.history = [];
      this.plHealth = 100;
      this.cpHealth = 100;
    },
    getRandom: function(min, max) {
      return parseInt(Math.random() * (max - min) + min);
    },
    monAttack: function() {
      return this.getRandom(5,11);
    },
    checkScore: function() {
      var end;
      if (this.plHealth <= 0 && this.cpHealth > 0) {
        end = confirm("Computer wins xD. New game?");
        this.act_quit(end);
      }
      else if  (this.cpHealth <= 0 && this.plHealth > 0) {
        end = confirm("Player wins! New game?");
        this.act_quit(end);
      }
      else if (this.plHealth <= 0 && this.cpHealth <= 0) {
        end = confirm("You tied! New game?");
        this.act_quit(end);
      }
      else { return; }
    },
    act_normAttack: function() {
      var plAt = this.getRandom(5,9);
      var cpAt = this.monAttack();
      this.history.unshift({dmg: plAt, who: 'player', what: 'HITS'});
      this.history.unshift({dmg: cpAt, who: 'monster', what: 'HITS'});
      this.plHealth -= cpAt;
      this.cpHealth -= plAt;
      this.checkScore();
    },
    act_spAttack: function() {
      var plAt = this.getRandom(7,13);
      var cpAt = this.monAttack();
      this.history.unshift({dmg: plAt, who: 'player', what: 'HITS'});
      this.history.unshift({dmg: cpAt, who: 'monster', what: 'HITS'});
      this.plHealth -= cpAt;
      this.cpHealth -= plAt;
      this.checkScore();
    },
    act_heal: function() {
      var plHl = this.getRandom(8,12);
      var cpAt = this.monAttack();
      this.history.unshift({dmg: plHl, who: 'player', what: 'HEALS'});
      this.history.unshift({dmg: cpAt, who: 'monster', what: 'HITS'});
      this.plHealth -= cpAt;
      this.plHealth += plHl;
      this.checkScore();
    },
    act_quit: function(e) {
      if (e === true) {
        this.history = [];
        this.plHealth = 100;
        this.cpHealth = 100;
        this.actShow = false;
      }
      else {
        this.actShow = false;
      }
    }
  }
});
