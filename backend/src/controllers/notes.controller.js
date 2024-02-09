const notesCtrl = {};

notesCtrl.getNotes = (req,res) => res.json({message: []})

notesCtrl.createNote = (req,res) => res.json({message: 'Note Saved' });

notesCtrl.getNote = (req,res) => res.json({title: 'titulo' })

notesCtrl.deleteNote = (req,res) => res.json({message: 'Note Deleted' })

notesCtrl.updateNote = (req,res) => res.json({message: 'Note Updated' })


module.exports = notesCtrl;